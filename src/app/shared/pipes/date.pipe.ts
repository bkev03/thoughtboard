import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableDate',
  standalone: true
})
export class ReadableDatePipe implements PipeTransform {

  transform(date: Date): string {
    try {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    } catch (error) {
      return date.toISOString();
    }
  }
  
}
