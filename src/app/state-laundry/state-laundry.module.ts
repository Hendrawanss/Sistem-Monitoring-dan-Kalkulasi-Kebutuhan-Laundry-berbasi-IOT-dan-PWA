import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StateLaundryPage } from './state-laundry.page';

const routes: Routes = [
  {
    path: '',
    component: StateLaundryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StateLaundryPage]
})
export class StateLaundryPageModule {}
