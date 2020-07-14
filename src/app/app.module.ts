import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryBuilderModule, QueryBuilderComponent } from "angular2-query-builder";
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QueryBuilderModule
    //IonicModule.forRoot(AppComponent) // (Optional) for IonicFramework 2+
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
