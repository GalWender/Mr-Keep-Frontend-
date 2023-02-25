import { AppComponent } from './app-root/app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { AutoFocusDirectiveModule } from './modules/auto-focus-directive/auto-focus-directive.module';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { NoteListComponent } from './cmps/note-list/note-list.component';
import { NotePreviewComponent } from './cmps/note-preview/note-preview.component';
import { SideNavComponent } from './cmps/side-nav/side-nav.component';
import { ReminderComponent } from './pages/reminder/reminder.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { TrashComponent } from './pages/trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SearchComponent,
    HomeComponent,
    LoginSignupComponent,
    NoteListComponent,
    NotePreviewComponent,
    SideNavComponent,
    ReminderComponent,
    ArchiveComponent,
    TrashComponent,
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
