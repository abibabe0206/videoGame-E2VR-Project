import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VideoGameService {
  // uri = 'https://api.rawg.io/api/games?key=e260cbeb3dca4e88bdca53afd52995a1&dates=2019-01-01,2019-12-30';
  uri = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-30';
  constructor(private http: HttpClient) { }

  /**
   * Gets all the videos game in 2019.
   */
  getVideoGamesDetails(): Observable<any> {
    return this.http.get(`${this.uri}`);
  }
}
