import { Component, OnInit } from '@angular/core';
import { Song } from '../song.model';
import { SongsManageService } from '../../services/songs-manage.service'

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['../songs-list/songs-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  songs: Song[];
  showLoadingIndicator = true;
  constructor(
    private songsManage: SongsManageService
    ) { }
    ngOnInit() {
      this.getFavorites();
     }
    getFavorites(){
      this.songsManage.getFavoritesSongs().subscribe(
        (data) => {this.songs=data, this.showLoadingIndicator=false});
    }
}
