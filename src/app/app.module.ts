import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocTakeComponent } from './components/take/take.component';
import { UnsubComponent } from './components/unsub/unsub.component';
import { HomeSubcribeComponent } from './components/home-subcribe/home-subcribe.component';
import { CardsBaseComponent } from './components/cards-base/cards-base.component';
import { SemUnsubscribeComponent } from './components/sem-unsubscribe/sem-unsubscribe.component';
import { AsyncComponent } from './components/async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    PocTakeComponent,
    UnsubComponent,
    HomeSubcribeComponent,
    CardsBaseComponent,
    SemUnsubscribeComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
