import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { getGitUserServices } from './getGitUserService';
import { ElemtoUnoComponent } from './elemto-uno/elemto-uno.component';
import { ElementoDosComponent } from './elemento-dos/elemento-dos.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ElemtoUnoComponent,
    ElementoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [getGitUserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
