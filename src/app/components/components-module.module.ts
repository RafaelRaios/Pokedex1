import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from '../angular-material.module';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
  ]
})

export class ComponentsModuleModule { }
