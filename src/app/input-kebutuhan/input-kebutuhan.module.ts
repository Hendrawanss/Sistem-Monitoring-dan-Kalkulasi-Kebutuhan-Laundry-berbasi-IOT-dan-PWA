import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputKebutuhanPage } from './input-kebutuhan.page';

const routes: Routes = [
  {
    path: '',
    component: InputKebutuhanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InputKebutuhanPage]
})
export class InputKebutuhanPageModule {}
