import { computed, inject } from '@angular/core';
import { Router } from '@angular/router';

import { withExcelStatus } from './app-signal-Excelfeature-store';
import { withRequestStatus } from './app-signal-feature-store';
import { routes } from './app.routes';
import { BerstaService } from './common/bersta.service';
import {
	BerstaLoginCredentials,
	BerstaProductDetail,
	BerstaRequestStates,
	BerstaUrls,
	createEmptyBerstaProductDetail,
} from './common/berstaTypes';

import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

const initBerstaState: BerstaRequestStates & BerstaUrls & BerstaLoginCredentials = {
	username: '',
	password: '',
	msgKey: 'unknown',
	token: '',
	productQueryResult: [],
	currentProduct: createEmptyBerstaProductDetail(),
	excelQuery: { searchText: '', articleNo: '' },
	loginUrl: 'https://shop.bersta.at/ACM/api/auth/login',
	productQueryUrl: 'https://shop.bersta.at/ACM/api/webshop/getproductsextended',
};
export const BerstaStore = signalStore(
	{ providedIn: 'root' },
	withState(initBerstaState),
	withRequestStatus(),
	withExcelStatus(),
	withComputed((state) => {
		return {
			isLogggedIn: computed(() => state.msgKey() === 'login.successful'),
			areCreditialsWrong: computed(() => state.msgKey() === 'error.authProv.userOrPasswordWrong'),
			disableQuery4Details: computed(() => state.msgKey() !== 'login.successful' || !state.isFulfilled()),
			isProductTableEnabled: computed(() => state.msgKey() === 'login.successful' && state.isFulfilled()),
			isTableEntrySelect: computed(() => state.currentProduct().sid > 0),
			getSelectedProductId: computed(() => state.currentProduct().sid),
			getCurrentPriceDetails: computed(() => {
				const priceDet = state.currentProduct().priceListPos;
				if (priceDet) {
					return priceDet[0];
				}
				return undefined;
			}),
			hasUnitsDifference: computed(() => {
				const priceDet = state.currentProduct().priceListPos;
				if (priceDet) {
					return priceDet[0].singleUnitPrice !== priceDet[0].singleUnitPricePriceList;
				}
				return false;
			}),
		};
	}),
	withMethods((state) => {
		const berstaClient = inject(BerstaService);
		const router = inject(Router);
		return {
			setCredentials(loginData: BerstaLoginCredentials) {
				patchState(state, loginData);
			},
			async doLogin() {
				state.setPending();
				const result = await berstaClient.doLogin({
					username: state.username(),
					password: state.password(),
					berstaUrl: state.loginUrl(),
				});
				patchState(state, {
					msgKey: result.msgKey,
					token: result.token,
				});
				state.setFulfilled();
				if (state.isLogggedIn()) {
					void router.navigate([routes[1].path]);
				}
			},
			async doQueryDetails(filter: string) {
				state.setPending();
				const result = await berstaClient.doQueryDetails(state.productQueryUrl(), filter);
				patchState(state, { productQueryResult: result.products });
				if (state.productQueryResult().length === 1) {
					this.doSetSelectedProduct(state.productQueryResult()[0]);
				}
				state.setFulfilled();
			},
			doSetSelectedProduct(currentProduct: BerstaProductDetail) {
				patchState(state, { currentProduct });
			},
			doQueryByExcel(searchText: string, articleNo: string) {
				patchState(state, { excelQuery: { articleNo, searchText } });
				if (articleNo) {
					void this.doQueryDetails(articleNo);
				} else {
					void this.doQueryDetails(searchText);
				}
			},
			saveUrls(loginUrl: string, productQueryUrl: string) {
				patchState(state, { loginUrl, productQueryUrl });
			},
		};
	}),
);
