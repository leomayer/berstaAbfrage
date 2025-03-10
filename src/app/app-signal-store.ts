import { computed, inject } from '@angular/core';

import { withExcelStatus } from './app-signal-Excelfeature-store';
import { withRequestStatus } from './app-signal-feature-store';
import { BerstaService } from './common/bersta.service';
import {
	BerstaLoginHttp,
	BerstaProductDetail,
	BerstaRequestStates,
	createEmptyBerstaProductDetail,
} from './common/berstaTypes';

import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

const initBerstaState: BerstaRequestStates = {
	msgKey: 'unknown',
	token: '',
	productQueryResult: [],
	currentProduct: createEmptyBerstaProductDetail(),
	excelQuery: { searchText: '', articleNo: '' },
};
export const BerstaStore = signalStore(
	{ providedIn: 'root' },
	withState(initBerstaState),
	withRequestStatus(),
	withExcelStatus(),
	withMethods((state) => {
		const berstaClient = inject(BerstaService);
		return {
			async doLogin(loginData: BerstaLoginHttp) {
				state.setPending();
				const result = await berstaClient.doLogin(loginData);
				patchState(state, {
					msgKey: result.msgKey,
					token: result.token,
				});
				state.setFulfilled();
			},
			async doQueryDetails(url: string, filter: string) {
				state.setPending();
				const result = await berstaClient.doQueryDetails(url, filter);
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
			},
		};
	}),
	withComputed((state) => {
		return {
			isLogggedIn: computed(() => state.msgKey() === 'login.successful'),
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
);
