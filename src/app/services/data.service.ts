import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL = '../assets/data.json';
  constructor(private httpClient: HttpClient) { }

  getDataJson() {
   return  this.httpClient.get(this.URL);
  }
}
