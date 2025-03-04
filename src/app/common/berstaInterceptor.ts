import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { BerstaStore } from '../app-signal-store';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
	// Inject the current `AuthService` and use it to get an authentication token:
	const berstaStore = inject(BerstaStore);
	/*
    Clone the request to add the authentication header - IF
    1. Not yet logged in
    2. if the URL does NOT contain a 'login'
   */

	if (berstaStore.isLogggedIn() && !req.url.includes('login')) {
		const newReq = req.clone({
			headers: req.headers.append('Authorization', `Bearer ${berstaStore.token()}`),
		});
		return next(newReq);
	}
	return next(req);
}
