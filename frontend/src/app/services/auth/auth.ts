import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { regiserModel, loginModel } from '../../models/auth';

@Service()
export class Auth {
    private http = inject(HttpClient);
    private path = '/api/auth';

    register(user: regiserModel): Observable<string> {
        return this.http.post<string>(this.path + '/register', user, { responseType: 'text' as 'json' })
    }

    login(user: loginModel): Observable<string> {
        return this.http.post<string>(this.path + '/login', user, { responseType: 'text' as 'json' })
    }
}
