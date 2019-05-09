import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { FavoriteListComponent } from './songs/favorite-list/favorite-list.component';

const routes: Routes = [
  {path: 'api/songsList', component: SongsListComponent},
  {path: 'api/getAllFavourites', component: FavoriteListComponent },
  {path: '**', redirectTo: 'api/songsList' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
