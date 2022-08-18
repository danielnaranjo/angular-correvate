import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CryptoService {
    private readonly KEY = environment.salt;

    constructor() { }

    private encryptString(value: string): string {
        return CryptoJS.AES.encrypt(value, this.KEY).toString();
    }

    private encryptObject(value: any): string {
        return CryptoJS.AES.encrypt(JSON.stringify(value), this.KEY).toString();
    }

    private decryptString(value: string): string {
        return CryptoJS.AES.decrypt(value, this.KEY).toString(CryptoJS.enc.Utf8);
    }

    /* private decryptSimpleObject(value: string): any {
        return JSON.parse(
            CryptoJS.AES.decrypt(value, this.KEY).toString(CryptoJS.enc.Utf8)
        );
    } */

    private decryptObject<T>(value: string): T {
        return JSON.parse(
            CryptoJS.AES.decrypt(value, this.KEY).toString(CryptoJS.enc.Utf8)
        ) as T;
    }

    getData(value: any): any {
        return typeof value === 'object'
            ? this.decryptObject(value)
            : this.decryptString(value);
    }

    setData(value: any): any {
        return typeof value === 'object'
            ? this.encryptObject(value)
            : this.encryptString(value);
    }
}
