import { computed, inject } from '@angular/core';

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
};
export const BerstaStore = signalStore(
	{ providedIn: 'root' },
	withState(initBerstaState),
	withRequestStatus(),
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
		};
	}),
	withComputed((state) => {
		return {
			isLogggedIn: computed(() => state.msgKey() === 'login.successful'),
			disableQuery4Details: computed(() => state.msgKey() !== 'login.successful' || !state.isFulfilled()),
			isProductTableEnabled: computed(() => state.msgKey() === 'login.successful' && state.isFulfilled()),
			isTableEntrySelect: computed(() => state.currentProduct().sid > 0),
			getSelectedProductId: computed(() => state.currentProduct().sid),
		};
	}),
);
