import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDateFr'
})
export class FormatDateFrPipe implements PipeTransform {

  // Date format is "DD/MM/YYYY HH:mm:ss"
  transform(date: string, format: string) {
    return moment(date, 'DD/MM/YYYY HH:mm').locale('fr').format(format);
  }

}
