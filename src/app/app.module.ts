import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TournamentListComponent } from './components/tournament-list/tournament-list.component';
import {TokenInterceptor} from './components/interceptors/token.interceptor';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TaskComponent } from './components/task/task.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TournamentListComponent,
    TournamentComponent,
    TaskComponent,
    CodeEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
