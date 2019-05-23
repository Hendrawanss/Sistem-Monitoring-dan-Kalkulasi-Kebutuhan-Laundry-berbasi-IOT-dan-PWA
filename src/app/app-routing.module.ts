import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'user', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule', canActivate:[AuthGuardService] },
  { path: 'detail-history/:tahun/:bulan/:tgl', loadChildren: './detail-history/detail-history.module#DetailHistoryPageModule', canActivate:[AuthGuardService] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule', canActivate:[AuthGuardService] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'view-kebutuhan', loadChildren: './view-kebutuhan/view-kebutuhan.module#ViewKebutuhanPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
