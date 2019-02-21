import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PdfParserLineChart } from './model/pdf-parser-line-chart';

@Injectable({
  providedIn: 'root'
})
export class LinechartService {
  private readonly apiRoot = '../assets/line-chart.json';
  // private readonly apiRoot = 'https://reqres.in/api/users?page=1';

  constructor(private httpClient: HttpClient) { }

  public getLineChart(): Observable<PdfParserLineChart> {
    return this.httpClient.get<PdfParserLineChart>(`${this.apiRoot}`);
    }
}
