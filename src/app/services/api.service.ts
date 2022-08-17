import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  updateUser(user: string, body: any | IUser) {
    return this.http.put<IUser>(`${environment.apiUrl}/user/${user}`, body);
  }

  getUser(options?: any): Observable<IUser[]> {
    const paginator =
      options && options.size
        ? '?p=' + options.page + '&limit=' + options.size
        : '';
    console.log(options);
    const search =
      options && options.query ? '&search=' + options.query.query : '';
    return this.http.get<IUser[]>(
      `${environment.apiUrl}/user${paginator}${search}`
    );
  }

  removeUser(user: string) {
    return this.http.delete<IUser>(`${environment.apiUrl}/user/${user}`);
  }

  createUser(body: any) {
    return this.http.post<IUser>(`${environment.apiUrl}/user`, body);
  }
}
