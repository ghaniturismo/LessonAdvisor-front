import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteachers'
})
export class NoteacherPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value || 'no teachers yet !';
  }

}
