import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'user', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule', canActivate:[AuthGuardService] },
  { path: 'detail-history/:millis', loadChildren: './detail-history/detail-history.module#DetailHistoryPageModule', canActivate:[AuthGuardService] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule', canActivate:[AuthGuardService] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'view-kebutuhan', loadChildren: './view-kebutuhan/view-kebutuhan.module#ViewKebutuhanPageModule' },
  { path: 'input-transaksi', loadChildren: './input-transaksi/input-transaksi.module#InputTransaksiPageModule' },
  { path: 'state-laundry', loadChildren: './state-laundry/state-laundry.module#StateLaundryPageModule' },
  { path: 'dashboard', loadChildren: './admin/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'pengadaan', loadChildren: './pengadaan/pengadaan.module#PengadaanPageModule' },
  { path: 'input-kebutuhan', loadChildren: './input-kebutuhan/input-kebutuhan.module#InputKebutuhanPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
