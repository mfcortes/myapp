import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ElemtoUnoComponent } from './elemto-uno/elemto-uno.component';
import { ElementoDosComponent } from './elemento-dos/elemento-dos.component';

import { HttpClientModule } from '@angular/common/http';

/*Servicios*/
import { GetGitUserServices } from './servicios/GetGitUserService';
import { TaskService } from './servicios/task.service';
import { JsonPlaceHolderComponent } from './json-place-holder/json-place-holder.component';



@NgModule({
  declarations: [
    AppComponent,
    ElemtoUnoComponent,
    ElementoDosComponent,
    JsonPlaceHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetGitUserServices,
              TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
