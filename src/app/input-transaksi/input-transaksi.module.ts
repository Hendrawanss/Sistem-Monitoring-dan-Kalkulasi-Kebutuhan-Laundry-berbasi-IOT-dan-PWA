import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputTransaksiPage } from './input-transaksi.page';

const routes: Routes = [
  {
    path: '',
    component: InputTransaksiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InputTransaksiPage]
})
export class InputTransaksiPageModule {}
