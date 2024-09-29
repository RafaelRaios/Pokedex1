import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MatSlideToggleModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
    ],
    exports: [
        MatSlideToggleModule, 
        MatInputModule,
        BrowserAnimationsModule, 
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
    ]
})

export class AngularMaterialModule {}