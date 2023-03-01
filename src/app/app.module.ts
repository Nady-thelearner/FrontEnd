import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';

@NgModule({
  declarations: [AppComponent, StudentCrudComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule , FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
