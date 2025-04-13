import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableDate',
  standalone: true
})
export class ReadableDatePipe implements PipeTransform {

  transform(date: Date): string {
    try {
      if (typeof date === 'string') {
        date = new Date(date);
      }
      
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    } catch (error) {
      return date.toISOString();
    }
  }
  
}
