import { computed } from '@angular/core';

import { patchState, signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';

export type RequestStatus = 'idle' | 'pending' | 'fulfilled' | 'nothingFound' | { error: string };
export type RequestStatusState = { requestStatus: RequestStatus };

export function withRequestStatus() {
	return signalStoreFeature(
		withState<RequestStatusState>({ requestStatus: 'idle' }),
		withMethods((state) => {
			return {
				setPending(): void {
					patchState(state, { requestStatus: 'pending' });
				},
				setFulfilled(): void {
					patchState(state, { requestStatus: 'fulfilled' });
				},
				setNothingFound(): void {
					patchState(state, { requestStatus: 'nothingFound' });
				},
				setError(error: string): void {
					patchState(state, { requestStatus: { error } });
				},
			};
		}),
		withComputed(({ requestStatus }) => ({
			isInit: computed(() => requestStatus() === 'idle'),
			isPending: computed(() => requestStatus() === 'pending'),
			isFulfilled: computed(() => requestStatus() === 'fulfilled'),
			isNothingFound: computed(() => requestStatus() === 'nothingFound'),
			error: computed(() => {
				const status = requestStatus();
				return typeof status === 'object' ? status.error : null;
			}),
		})),
	);
}
