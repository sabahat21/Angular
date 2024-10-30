import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'submitted-form',
    loadChildren: () => import('./pages/submitted-form/submitted-form.module').then( m => m.SubmittedFormPageModule)
  },
  {
    path: 'submitted-form',
    loadChildren: () => import('./pages/submitted-form/submitted-form.module').then( m => m.SubmittedFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
