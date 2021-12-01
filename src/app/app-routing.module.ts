import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {TournamentListComponent} from './components/tournament-list/tournament-list.component';
import {TournamentComponent} from './components/tournament/tournament.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: TournamentListComponent,
    path: 'tournaments'
  },
  {
    component: TournamentComponent,
    path: 'tournaments/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
