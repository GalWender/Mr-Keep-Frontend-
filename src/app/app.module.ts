import { AppComponent } from './app-root/app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { AutoFocusDirectiveModule } from './modules/auto-focus-directive/auto-focus-directive.module';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SearchComponent,
    HomeComponent,
    LoginSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoFocusDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
