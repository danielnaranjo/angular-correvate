import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';
import { AppConfigService } from './appconfig.service';
import { environment } from '../../environments/environment';

// tslint:disable-next-line
@Injectable({
  providedIn: 'root'
})
export class SentryService {

  constructor(
    private appConfig: AppConfigService,
  ) { }


  public main(): void {
    try {
      // Sentry -  start 
      Sentry.init({
        dsn: `${environment.sentryDSN}`,
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
      });
      // Sentry - end  
    } catch (ex) {
      console.error('[Sentry] Error: ', ex);
    }
  }

  public setUser(): void {
    const isSentry = this.appConfig.returnGlobalsConfig().modules.sentry.backoffice ? true : false;
		  if (isSentry && localStorage.getItem('auth')) {
      try {
        const userData: any = JSON.parse(localStorage.getItem('auth'));
        Sentry.setUser({
          id: `${userData.user.entity.currentId}`,
          name: `${userData.user.entity.name}`,
          username: `${userData.user.entity.mail}`,
          tenant: `${userData.user.entity.tenant}`,
          rol: `${userData.user.entity.roles[0]}`
        });
      } catch {
        return null;
      }
    }
  }

}
