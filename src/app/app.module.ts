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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
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
