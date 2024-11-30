import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'scan', 
    loadChildren: () => import('./components/scan/scan.module').then(m => m.ScanModule) 
  }, 
  {
    path: '', 
    redirectTo: '/scan', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
