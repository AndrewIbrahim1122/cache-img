import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageCacheService {
  api = "http://localhost:3000/fake-api/image"

  constructor(private http: HttpClient) { }
  
  getImg(){
   const headers = new HttpHeaders().set('Cache-Control', 'max-age=604800');
    return this.http.get(this.api , {headers})
  }

}
