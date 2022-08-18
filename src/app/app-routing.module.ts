import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule),
    data: {
      description: 'Description Meta Tag Content',
    },
  },
  {
    path: 'login',
    data: {
      description: 'Login page',
    },
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    data: {
      description: 'Register page',
    },
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
