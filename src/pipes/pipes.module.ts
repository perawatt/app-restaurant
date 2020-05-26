import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateConverterPipe } from './date-converter.pipe';



@NgModule({
  declarations: [DateConverterPipe],
  imports: [
    CommonModule
  ],
  exports: [DateConverterPipe]
})
export class PipesModule { }
