import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  updateUser(user: string, body: any) {
    return this.http.put<any>(`${environment.apiUrl}/user/${user}`, body);
  }

  getUser(options?: any): Observable<any[]> {
    const paginator =
      options && options.size
        ? '?p=' + options.page + '&limit=' + options.size
        : '';
    console.log(options);
    const search =
      options && options.query ? '&search=' + options.query.query : '';
    return this.http.get<any[]>(
      `${environment.apiUrl}/user${paginator}${search}`
    );
  }

  removeUser(user: string) {
    return this.http.delete<any>(`${environment.apiUrl}/user/${user}`);
  }

  createUser(body: any) {
    return this.http.post<any>(`${environment.apiUrl}/user`, body);
  }
}
