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
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { RegexCommon } from './services/regex.service';
import { PipesModule } from './shared/pipes/pipes.module';
import { MaterialModulesList } from 'src/app/shared/components/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule, 
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    RegisterModule,
    AdminModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    PipesModule,
    MaterialModulesList,
  ],
  providers: [
    ApiService, 
    ApiService, 
    UtilsService, 
    MetaService,
    { provide: HTTP_INTERCEPTORS, useClass: DataServiceInterceptor, multi: true },
    RegexCommon,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
