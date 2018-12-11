import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { reducers } from './store/reducers/app.reducer';
import { environment } from '../environments/environment';
import { HomeComponent } from './containers/home/home.component';
import { HomeGreetingsComponent } from './components/home-greetings/home-greetings.component';
import { AppRoutingModule } from './app-routing.module';
import { GithubEffects } from './store/effects/github.effects';
import { GithubUserListComponent } from './components/github-user-list/github-user-list.component';
import { GithubUsersComponent } from './containers/github-users/github-users.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HomeGreetingsComponent, GithubUsersComponent, GithubUserListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([GithubEffects]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
