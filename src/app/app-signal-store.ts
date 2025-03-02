import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {computed, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {BerstaService} from './common/bersta.service';
import {BerstaLoginHttp, BerstaLoginState} from './common/berstaTypes';

const initBerstaState: BerstaLoginState = {
  msgKey: 'unknown',
  token: '',
}
export const BerstaStore = signalStore(
  {providedIn: 'root'},
  withState(initBerstaState),
  withMethods((state) => {
    const berstaClient = inject(BerstaService);
    return {
      async doLogin(loginData: BerstaLoginHttp) {
        const result=await berstaClient.doLogin(loginData);
        patchState(state, {
          msgKey: result.msgKey,
          token: result.token,
        })
      },
      async doQueryDetails(url:string, filter:string){
         const result=await berstaClient.doQueryDetails(url, filter);
        console.log("query result:", result);
      }
    }
  }),
  withComputed((state) => {
    return {
      isLogggedIn: computed(() => state.msgKey() === "login.successful"),
      isLogggedOut: computed(() => state.msgKey() !== "login.successful")
    }
  })
)
