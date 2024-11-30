import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanRoutingModule } from './scan-routing.module';
import { ScanComponent } from './scan.component';
import { MaterialModule } from '../../material/material.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    ScanComponent,
    LoadingComponent
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
