import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ApiProvider} from './providers/api.provider';
import {Routes, RouterModule} from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ContactComponent } from './contact/contact.component';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import 'rxjs';

const APP_ROUTES: Routes =[
  {path:'', component: PrincipalComponent, pathMatch:'full'},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule
  ],
  providers: [
    ApiProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
