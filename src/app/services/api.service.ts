import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(url: string, options?: any): Observable<any[]> {
    const paginator =
      options && options.size
        ? '?p=' + options.page + '&limit=' + options.size
        : '';
    console.log(url,options);
    const search =
      options && options.query ? '&search=' + options.query.query : '';
    return this.http.get<any[]>(
      `${environment.apiUrl.url}/${url}${paginator}${search}`
    );
  }

  updateData(user: string, body: any) {
    return this.http.put<any>(`${environment.apiUrl.url}/user/${user}`, body);
  }

  removeData(user: string) {
    return this.http.delete<any>(`${environment.apiUrl.url}/user/${user}`);
  }

  createData(body: any) {
    return this.http.post<any>(`${environment.apiUrl.url}/user`, body);
  }
}
