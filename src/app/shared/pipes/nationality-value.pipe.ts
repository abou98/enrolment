import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalityValue'
})
export class NationalityValuePipe implements PipeTransform {

  private nationalityValues: { [key: number]: string } = {
    51: 'SENEGAL',
    52: 'COTE D\'IVOIRE',
    53: 'MALI',
    // Ajoutez ici les autres countryId avec leur label
  };

  transform(value: any): any {
    if (!value || typeof value !== 'object' || !value.countryId) {
      return value;
    }

    const label = this.nationalityValues[value.countryId];
    if (label) {
      return {
        ...value,
        name: label
      };
    }

    return value;
  }

}
