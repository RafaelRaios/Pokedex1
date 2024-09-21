import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipePipe } from './capitalize-pipe.pipe';
import { FeetToMeterPipe } from './feet-to-meter.pipe';
import { ToKgPipe } from './to-kg.pipe';



@NgModule({
  declarations: [
    CapitalizePipePipe,
    FeetToMeterPipe,
    ToKgPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipePipe,
    FeetToMeterPipe,
    ToKgPipe,
  ],
})
export class PipeModuleModule { }
