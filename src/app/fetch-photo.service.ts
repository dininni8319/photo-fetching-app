import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

interface Photo {
  urls: {
    small: string
  }
}
@Injectable({
  providedIn: 'root'
})


export class FetchPhotoService {
  accessKey = 'NSvWY5BdXylSU4aoukdrcTaMXtMl7gHTfz14hKotLUQ'
  secretKey = 'Leq8JY0B2t-xDz8x_nPC3fh_RZRaNIQK_oiwHe5aH00'
  // GET /photos/random
  constructor(
    private http: HttpClient
  ) { }

  getRandomPhoto():Observable<Photo> {
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${this.accessKey}`
    return this.http.get<Photo>(
      apiUrl,
      {
        headers: {
          Authorization: `Client-ID ${this.accessKey}`
        } 
      }
    )
      .pipe(map((data: any) => {
        return { 
          urls: {
            small: data.urls.small
          }
        }
      }))
  }
}
