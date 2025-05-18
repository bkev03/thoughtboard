import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'readableDate',
  standalone: true
})
export class ReadableDatePipe implements PipeTransform {

  transform(date: Timestamp | Date): string {
    try {
      if (date instanceof Timestamp) {
        let convDate = new Date(date.seconds * 1000);

        const year = convDate.getFullYear();
        const month = String(convDate.getMonth() + 1).padStart(2, '0');
        const day = String(convDate.getDate()).padStart(2, '0');
        const hours = String(convDate.getHours()).padStart(2, '0');
        const minutes = String(convDate.getMinutes()).padStart(2, '0');
        const seconds = String(convDate.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    } catch (error) {
      return '';
    }
  }
  
}
