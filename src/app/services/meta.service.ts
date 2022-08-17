import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MetaService {
    constructor(
        private titleService: Title,
        private meta: Meta,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    updateMetaInfo(content: string, author: string, category: string) {
        this.meta.updateTag({ name: 'description', content: content });
        this.meta.updateTag({ name: 'author', content: author });
        this.meta.updateTag({ name: 'keywords', content: category });
    }

    updateTitle(title?: string, branding?: boolean) {  
        console.log('[title]', title);
        const isWhiteBrand = !branding ? ' | Powered by ' + environment.branding : '';
        if (!title) {
            this.router.events
                .pipe(
                    filter((event) => event instanceof NavigationEnd),
                    map(() => this.activatedRoute),
                    map((route) => {
                        while (route.firstChild) { route = route.firstChild; }
                        return route;
                    }),
                    filter((route) => route.outlet === 'primary'),
                    mergeMap((route) => route.data)).subscribe((event) => {
                        this.titleService.setTitle(event['title'] + isWhiteBrand);
                    });
        } else {
            this.titleService.setTitle(title + isWhiteBrand);
        }
    }
}