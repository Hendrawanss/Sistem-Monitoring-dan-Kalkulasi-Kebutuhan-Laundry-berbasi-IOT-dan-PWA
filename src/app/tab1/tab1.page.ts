import { Component } from '@angular/core';
import { KebutuhanService } from './../service/kebutuhan.service';
import { TransaksiService } from './../service/transaksi.service';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { InputTransaksiPage } from './../input-transaksi/input-transaksi.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  kebutuhan:any;
  masuk:any;
  proses:any;
  selesai:any;
  dataReturned:any;

  constructor(
    private kebutuhanService: KebutuhanService,
    private storage: Storage,
    private trans: TransaksiService,
    public modalCtrl: ModalController,
  ){}

  ngOnInit(){
    this.storage.get('id_usaha').then((response) => {
      if (response) {
        this.kebutuhanService.get_stockable_kebutuhan(response['id_usaha']).subscribe(
          data=>{
            this.kebutuhan = data
        });  
      }
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: InputTransaksiPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

}
