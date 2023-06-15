import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModuleModule } from './ui-module/ui-module/ui-module.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModuleModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class SharedModule { }
