import { Injectable, OnDestroy } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { share, delay } from 'rxjs/operators';

@Injectable()
export class StorageServices implements OnDestroy {
  private onSubject = new Subject<{ key: string; value: any }>();
  private event = fromEvent(window, 'storage').pipe(delay(500));
  public changes = this.onSubject.asObservable().pipe(share());

  constructor() {
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  public getStorage(storage: any) {
    return JSON.parse(localStorage.getItem(storage));
  }

  public store(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
    this.onSubject.next({ key, value: data });
  }

  public clear(key: any) {
    localStorage.removeItem(key);
    this.onSubject.next({ key, value: null });
  }

  private start(): void {
    this.event.subscribe();
  }

  private stop(): void {
    this.onSubject.complete();
  }
}
