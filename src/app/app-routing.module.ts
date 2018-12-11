import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { GithubUsersComponent } from './containers/github-users/github-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'githubusers', component: GithubUsersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
