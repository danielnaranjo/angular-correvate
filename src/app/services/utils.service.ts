import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  role: string;
  userData: any = null;
  roleActive: string = null;

  constructor(private cryptoService: CryptoService) {}

  insertCkEditorCode() {
    try {
      const script = document.createElement('script');
      script.src = 'https://cdn.ckeditor.com/4.14.1/full/ckeditor.js';
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
      console.log('ChatBot loaded');
    } catch (ex) {
      console.error('Error appending chat bot');
      console.error(ex);
    }
  }

  isSafari(): boolean {
    // Hack Safari, select first as default
    return (
      window.navigator.userAgent.includes('Macintosh') ||
      window.navigator.userAgent.includes('iPad') ||
      window.navigator.userAgent.includes('iPhone')
    );
  }

  sortable(data: any, order: boolean = true) {
    return data.sort((a: any, b: any) => {
      const aa = a.id;
      const bb = b.id;
      return order ? bb - aa : aa - bb;
    });
  }
}
