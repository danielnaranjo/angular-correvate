import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilsService } from "./services/utils.service";
import { ApiService } from "./services/api.service";
import { PagesModule } from "./modules/pages/pages.module";
import { MetaService } from "./services/meta.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataServiceInterceptor } from './modules/core/interceptors/data-service.interceptor';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterModule } from './modules/register/register.module';
import { AdminModule } from './modules/admin/admin.module';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    PagesModule,
    RegisterModule,
    AdminModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService, 
    ApiService, 
    UtilsService, 
    MetaService,
    { provide: HTTP_INTERCEPTORS, useClass: DataServiceInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
