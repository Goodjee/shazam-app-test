import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../songs/song.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Authorization':
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aXZAY3ljdXJpdHkuY29tIiwibmFtZSI6ImF2aXYiLCJpYXQiOjE1NTQ4ODIyOTl9._cLVE40a47NXHENdLCd8L4AGaORzJs8vkIMFIt4WyWU'
    })
  };

@Injectable({providedIn: "root"})
export class SongsManageService {
    constructor(private httpClient: HttpClient) {}
  
    songsUrl = 'https://fullstack-test-server.herokuapp.com/api/songs';
    favoriteSongsUrl = 'https://shazam-test-app.firebaseio.com/favorite.json';

    getSongs(){
        return this.httpClient.get<Song[]>(this.songsUrl, httpOptions);
    }

    addToFavorites(favoriteSongs: Song[]){
      return this.httpClient.put<Song[]>(this.favoriteSongsUrl, favoriteSongs);
    }

    removeFromFavores(songs : Song[]){
      return this.httpClient.put<Song[]>(this.favoriteSongsUrl, songs);
    }

    getFavoritesSongs(){
      return this.httpClient.get<Song[]>(this.favoriteSongsUrl);
  }
}