import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { BerstaLoginHttp, BerstaProductDetail, BerstaProductDetailHttp, BerstaRequestStates } from './berstaTypes';

import { firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BerstaService {
	httpClient = inject(HttpClient);

	doLogin(loginData: BerstaLoginHttp) {
		return firstValueFrom(
			this.httpClient.post<BerstaRequestStates>(loginData.berstaUrl, {
				username: loginData.username,
				password: loginData.password,
			}),
		);
	}

	doQueryDetails(url: string, filter: string) {
		return firstValueFrom(
			this.httpClient.post<BerstaProductDetailHttp>(url, {
				searchCriteria: filter,
				startIndex: 1,
				numDataSets: 20,
				loadArticleTourUsage: false,
			}),
		);
	}
}
