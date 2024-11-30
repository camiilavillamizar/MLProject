import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanRoutingModule } from './scan-routing.module';
import { ScanComponent } from './scan.component';
import { MaterialModule } from '../../material/material.module';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    ScanComponent
  ],
  imports: [
    CommonModule,
    ScanRoutingModule, 
    MaterialModule, 
    NgxFileDropModule
  ], 
  providers: []
})
export class ScanModule { }
