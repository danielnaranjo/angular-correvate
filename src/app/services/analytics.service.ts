import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../environments/environment';

// tslint:disable-next-line
declare var ga: Function;


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(
    public router: Router,
  ) {
    this.router.events.subscribe(event => {
      try {
        if (typeof ga === 'function') {
          if (event instanceof NavigationEnd) {
            ga('set', 'page', event.urlAfterRedirects);
            ga('send', 'pageview');
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
  }

  /**
   * Emit google analytics event
   * Fire event example:
   * this.setEvent("testCategory", "testAction", "testLabel", 10);
   * eventCategory: string
   * eventAction: string
   * eventLabel: string
   * eventValue: number
   */
  public setEvent(eventCategory: string, eventAction: string, eventLabel: any = null, eventValue: any = null ) {
    if (typeof ga === 'function') {
      ga('send', 'event', { eventCategory, eventLabel, eventAction, eventValue });
      this.setUser();
    }
  }

  private setUser(isTrackable: boolean = false) {
    if ( isTrackable ) {
      const user = 123;
      const script = document.createElement('script');
      script.innerHTML += `ga('set', 'userId', '` + user + `');`;
      document.head.appendChild(script);
    }
  }

  public insertTrackingCode() {
    try {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
       
        ga('create', '` + environment.googleAnalyticsKey + `', 'auto');
      `;
      document.head.appendChild(script);
    } catch (ex) {
      console.error('Error appending google analytics');
      console.error(ex);
    }
  }

}
