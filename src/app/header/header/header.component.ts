import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['']
})
export class HeaderComponent implements OnInit {
  songsList: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  showFavorites(){
    this.songsList = false;
  }
  showChart(){
    this.songsList = true;
  }

}
