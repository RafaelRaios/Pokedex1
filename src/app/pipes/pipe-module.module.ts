import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipePipe } from './capitalize-pipe.pipe';
import { ToKgPipe } from './to-kg.pipe';
import { DecimeterToMeterPipe } from './decimeter-to-meter.pipe';



@NgModule({
  declarations: [
    CapitalizePipePipe,
    ToKgPipe,
    DecimeterToMeterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipePipe,
    ToKgPipe,
    DecimeterToMeterPipe,
  ],
})
export class PipeModuleModule { }
