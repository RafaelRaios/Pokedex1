import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from '../angular-material.module';
import { BodyComponent } from './body/body.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    PokemonCardComponent,
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
