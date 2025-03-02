import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {computed, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

export type BerstaLoginState = {
  msgKey: string,
  token: string,
}
export type BerstaLoginHttp = {
  berstaUrl: string,
  username: string,
  password: string,
}
const initBerstaState: BerstaLoginState = {
  msgKey: 'unknown',
  token: '',
}
export const BerstaStore = signalStore(
  {providedIn: 'root'},
  withState(initBerstaState),
  withMethods((state) => {
    const httpClient = inject(HttpClient);
    return {
      async doLogin(loginData: BerstaLoginHttp) {
        const result: BerstaLoginState = await firstValueFrom(httpClient.post<BerstaLoginState>(loginData.berstaUrl, {
          "username": loginData.username,
          "password": loginData.password,
        }));
        patchState(state, {
          msgKey: result.msgKey,
          token: result.token,
        })
      }
    }
  }),
  withComputed((state) => {
    return {
      isLogggedIn: computed(() => state.msgKey() === "login.successful")
    }
  })
)
