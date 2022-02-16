import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// TEMPORARY DATABASE. 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// - // - // - //

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, NavBarComponent, AuthComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
