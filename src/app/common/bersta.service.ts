import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {BerstaProductDetail, BerstaLoginHttp, BerstaLoginState, BerstaProductDetailHttp} from './berstaTypes';

@Injectable({
  providedIn: 'root'
})
export class BerstaService {
  httpClient = inject(HttpClient);

   doLogin(loginData: BerstaLoginHttp) {
    return firstValueFrom(this.httpClient.post<BerstaLoginState>(loginData.berstaUrl, {
      "username": loginData.username,
      "password": loginData.password,
    }));
  }

  doQueryDetails(url: string, filter: string) {
    return firstValueFrom(this.httpClient.post<BerstaProductDetailHttp>(url,
      {
        "searchCriteria": filter,
        "startIndex": 1,
        "numDataSets": 20,
        "loadArticleTourUsage":false,
      }
    ))

  }
}
