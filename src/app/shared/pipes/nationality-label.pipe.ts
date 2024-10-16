import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalityLabel'
})
export class NationalityLabelPipe implements PipeTransform {

  private nationalityLabels: { [key: string]: string } = {
    CI: 'COTE D\'IVOIRE',
    SN: 'SENEGAL',
    ML: 'MALI',
    // Ajoutez ici les autres nationalités avec leur code
  };

  transform(value: any[]): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    return value.map(item => {
      if (item.code && this.nationalityLabels[item.code]) {
        return {
          ...item,
          name: this.nationalityLabels[item.code]
        };
      }
      return item;
    });
  }
}
