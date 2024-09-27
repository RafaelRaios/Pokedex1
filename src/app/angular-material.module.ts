import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        MatSlideToggleModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
    ],
    exports: [
        MatSlideToggleModule, 
        MatInputModule,
        BrowserAnimationsModule, 
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
    ]
})

export class AngularMaterialModule {}