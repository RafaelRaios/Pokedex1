import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipePipe } from './capitalize-pipe.pipe';



@NgModule({
  declarations: [
    CapitalizePipePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipePipe,
  ],
})
export class PipeModuleModule { }
