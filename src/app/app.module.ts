import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsModule } from './features/news/news.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarHeaderModule } from './shared/modules/navbar-header/navbar-header.module';
import { NewsApiInterceptor } from './core/authentication/news-api/news-api.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NewsModule, NgbModule, NavbarHeaderModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: NewsApiInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
