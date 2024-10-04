import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipePipe } from './capitalize-pipe.pipe';
import { ToKgPipe } from './to-kg.pipe';
import { DecimeterToMeterPipe } from './decimeter-to-meter.pipe';
import { IsHiddenPipe } from './is-hidden.pipe';



@NgModule({
  declarations: [
    CapitalizePipePipe,
    ToKgPipe,
    DecimeterToMeterPipe,
    IsHiddenPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipePipe,
    ToKgPipe,
    DecimeterToMeterPipe,
    IsHiddenPipe,
  ],
})
export class PipeModuleModule { }
