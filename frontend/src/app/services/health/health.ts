import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Health {
    private http = inject(HttpClient)

    check() {
        return this.http.get('/actuator/health');
    }
}
