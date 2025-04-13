import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableRole',
  standalone: true
})
export class ReadableRolePipe implements PipeTransform {

  transform(role: string): string {
    if (role === 'ROLE_ADMIN') {
      return 'Administrator';
    } else if (role === 'ROLE_USER') {
      return 'User';
    }

    return role;
  }

}
