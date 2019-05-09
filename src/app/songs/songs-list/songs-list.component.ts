import { Component, OnInit } from '@angular/core';
import { Song } from '../song.model';
import { SongsManageService } from '../../services/songs-manage.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  songs: Song[];
  filteredSongs: Song[] = [];
  filterText: string = '';
  favorites: Song[] = [];
  showLoadingIndicator = true;
  constructor(
    private songsManage: SongsManageService
    ) { }

  ngOnInit() {
    // clear up backend database
    this.songsManage.addToFavorites([]).subscribe();
    // geting songs list from 'https://fullstack-test-server.herokuapp.com/api/songs' put it into songs array
    this.songsManage.getSongs().subscribe(
      (data) => {
        this.songs=data['chart'],
        this.filteredSongs = this.songs,
        this.showLoadingIndicator=false });
    
  }

  addToFavorites(song : Song){
    // add favorite song to array and send favorites array to backend
    this.favorites.push(song);
    this.songsManage.addToFavorites(this.favorites).subscribe();
  }

  removeFromFavorites(song: Song){
    // remove song from favorites array and send NEW favorites array to backend
    this.favorites = this.favorites.filter(item => item !== song);
    this.songsManage.removeFromFavores(this.favorites).subscribe();
  }

  filterSongs(){
    // clear up array of songs
    this.filteredSongs = [];
    //searching for songs that starts whis entered text and add them to empty array
    for(let song of this.songs){
      if(song['heading']['title'].toLowerCase().startsWith(this.filterText.toLowerCase())){
        this.filteredSongs.push(song)
      }
    }
  }

}

