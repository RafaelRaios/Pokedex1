import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { PipeModuleModule } from '../pipes/pipe-module.module';
import { AngularMaterialModule } from '../angular-material.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailedComponent } from './pokemon-detailed/pokemon-detailed.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    PokemonCardComponent,
    PokemonDetailedComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PipeModuleModule,
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    PokemonCardComponent,
    PokemonDetailedComponent,
  ]
})

export class ComponentsModuleModule { }
