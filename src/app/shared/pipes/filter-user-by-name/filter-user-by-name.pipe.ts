import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserByName'
})
export class FilterUserByNamePipe implements PipeTransform {
  transform(users: any[], searchText: string): any[] {
    if (!users || !searchText) {
      return users;
    }
    return users.filter(user =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
