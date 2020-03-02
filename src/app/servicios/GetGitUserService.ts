import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetGitUserServices {
  constructor(public http: HttpClient) {
      console.log('Servicio esta funcionando');
   }

   getData(StrUrl: string)
   {
      return this.http.get(StrUrl);
   }
}
