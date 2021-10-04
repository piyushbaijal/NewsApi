import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  //top Headline API URL
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=6cc9018ad29d405199c878dd5e761c34';
  //tech News Api URL
  techNews="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6cc9018ad29d405199c878dd5e761c34";

  //Business news API URL
  businessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6cc9018ad29d405199c878dd5e761c34';



  //For Buniness Logic
  tcBuzzNews():Observable<any>{
    return this._http.get(this.businessNews)

  }


  //Use tech Methods
  tcTechNews():Observable<any>{
    return this._http.get(this.techNews)

  }

  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)

  }
}
function thisbusinessNews(thisbusinessNews: any): Observable<any> {
  throw new Error('Function not implemented.');
}

