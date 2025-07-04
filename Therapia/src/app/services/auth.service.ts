import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  sendKind(kind: number): Observable<HttpResponse<any>> {
    console.log('Mock sending kind:', kind);
    return of(new HttpResponse({ status: 200, body: { message: 'ok' } }))
      .pipe(delay(1000));
  }

  signup(signupData: any): Observable<HttpResponse<any>> {
    console.log('Mock signup with data:', signupData);
    return of(new HttpResponse({ status: 200, body: { message: 'signup successful' } }))
      .pipe(delay(1000));
  }

  checkEmailVerified(): Observable<{ verified: boolean }> {
    console.log('Mock checking email verification status');
    return of({ verified: true }).pipe(delay(1000));
  }
}
