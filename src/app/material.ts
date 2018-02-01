import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatGridListModule, MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [MatTableModule,MatGridListModule,MatListModule,MatIconModule],
  exports: [MatTableModule,MatGridListModule,MatListModule,MatIconModule],
})
export class MaterialM { }