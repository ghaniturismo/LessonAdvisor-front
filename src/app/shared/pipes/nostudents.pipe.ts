import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nostudents'
})
export class NostudentsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value || 'no students yet !';
  }

}
