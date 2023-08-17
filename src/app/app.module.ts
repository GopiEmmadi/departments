import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add this import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './list/edit.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    NavComponent,
    DetailsComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [{provide:RouteReuseStrategy, useClass:CustomRouteReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
