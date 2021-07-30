import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'template',
    loadChildren: () => import('./template/template.module')
      .then(m => m.TemplateModule)
      .catch(error => {
        if (window) { window.location.reload(); }
      })
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module')
      .then(m => m.ReactiveModule)
      .catch(error => {
        if (window) { window.location.reload(); }
      })
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
      .catch(error => {
        if (window) { window.location.reload(); }
      })
  },
  {
    path: '**',
    redirectTo: 'template'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
