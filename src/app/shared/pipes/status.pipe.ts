import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipe implements PipeTransform {

  constructor(private titlecasePipe: TitleCasePipe) { }

  transform(value: string, ...args: unknown[]): string {
    return typeof value === 'string' ? this.titlecasePipe.transform(value) : value;
  }

}
