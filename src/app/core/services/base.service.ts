import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getOne(endPoint: string, id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endPoint}/${id}`);
  }
  getBySlug(endPoint: string, slug: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endPoint}/${slug}`);
  }
  getAll(endPoint: string, id?: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endPoint}`);
  }

  getListByForum(endPoint: string, id?: any): Observable<any> {
    return id === undefined
      ? this.http.get(`${this.baseUrl}/${endPoint}`)
      : this.http.get(`${this.baseUrl}/${endPoint}/${id}`);
  }
  delete(endPoint: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endPoint}/${id}`);
  }
  update(endPoint: string, id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endPoint}/${id}`, data);
  }
  create(endPoint: string, data: any, id?: any): Observable<any> {
    return id !== null
      ? this.http.post(`${this.baseUrl}/${endPoint}/${id}`, data)
      : this.http.post(`${this.baseUrl}/${endPoint}`, data);
  }
}
