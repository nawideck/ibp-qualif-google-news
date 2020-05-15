import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsApi } from '../../models/news-api.model';
import { AppConfig } from 'src/app/core/config/appConfig';
import { environment } from 'src/environments/environment';

/**
 * Get data from NewsApiService
 *
 * @export
 */
@Injectable({
  providedIn: 'root'
})
export class GoogleNewsWebService {
  private url: string;
  private headers: HttpHeaders;

  /**
   * Creates an instance of GoogleNewsWebService.
   * @param httpClient Http Angular utility
   */
  constructor(private httpClient: HttpClient) {
    this.url = `${environment.urlApi}/news/top-headlines?country=fr`;
  }

  /**
   * Get list of news
   *
   * @param page Page number
   * @param pageSize Number of element by page
   * @returns List of news
   */
  list(page: number, pageSize: number): Observable<NewsApi> {
    let params: HttpParams = new HttpParams();
    if (page) {
      params = params.append('page', page.toString());
    }

    if (pageSize) {
      params = params.append('pageSize', pageSize.toString());
    }

    return this.httpClient.get<NewsApi>(`${this.url}`, { params });
  }
}
