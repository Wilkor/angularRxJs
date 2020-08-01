import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSubcribeComponent } from './components/home-subcribe/home-subcribe.component';

const routes: Routes =
[
  {
    path:'subscribe', component: HomeSubcribeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
