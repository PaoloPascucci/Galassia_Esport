import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerSingleComponent } from './components/player-single/player-single.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  title:'Home page'
},
{
  path:'players',
  component:PlayerListComponent,
  title:'Player List'
},
{
  path:'players/:id',
  component:PlayerSingleComponent,
  title:'Single Player'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
