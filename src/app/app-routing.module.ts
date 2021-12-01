import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {TournamentListComponent} from './components/tournament-list/tournament-list.component';
import {TournamentComponent} from './components/tournament/tournament.component';
import {TaskComponent} from './components/task/task.component';

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
  },
  {
    component: TaskComponent,
    path: 'tournaments/:id/tasks/:taskId'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
