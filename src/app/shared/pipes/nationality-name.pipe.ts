import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalityName'
})
export class NationalityNamePipe implements PipeTransform {

  private nationalitiess: { [key: number]: string } = {
    51: 'SENEGAL',
    52: 'COTE D\'IVOIRE',
    53: 'MALI',
    // Ajoutez ici les autres countryId avec leur label
  };

  transform(value: any): string {
    if (!value || typeof value !== 'object' || !value.countryId) {
      return value;
    }
    return this.nationalitiess[value.countryId] || value.name;
  }

}
