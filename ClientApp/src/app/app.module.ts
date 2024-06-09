import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {ListPage100Component} from "./ListPage100/ListPage100.component";
import {ListPage1000Component} from "./ListPage1000/ListPage1000.component";
import {ListPage10000Component} from "./ListPage10000/ListPage10000.component";
import {PrimePageComponent} from "./primePage/primePage.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListPage100Component,
    ListPage1000Component,
    ListPage10000Component,
    PrimePageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'ListPage100', component: ListPage100Component },
      { path: 'ListPage1000', component: ListPage1000Component },
      { path: 'ListPage10000', component: ListPage10000Component },
      { path: 'primePage', component: PrimePageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
