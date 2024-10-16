import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDateFrPipe } from './pipes/format-date-fr.pipe';

@NgModule({
  declarations: [FormatDateFrPipe],
  imports: [
    CommonModule,
  ],
  exports:[
    FormatDateFrPipe
  ]
})
export class CustomPipeModule {}
