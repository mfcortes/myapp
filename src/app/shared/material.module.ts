import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

const materialCmponents = [
  BrowserAnimationsModule,
  MatSliderModule,
  MatButtonModule
];

@NgModule({
  imports: [materialCmponents],
  exports: [materialCmponents]
})

export class MaterialModule { }
