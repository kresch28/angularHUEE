import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {CollapseModule} from './modules/collapse/collapse.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './services/search.service';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxTemplateDirective } from './directives/search-box-template.directive';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
    SearchBoxTemplateDirective,
    RegisterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
