import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {KebutuhanService} from './../service/kebutuhan.service';
import { ModalController } from '@ionic/angular';
import { InputKebutuhanPage } from './../input-kebutuhan/input-kebutuhan.page';



@Component({
  selector: 'app-view-kebutuhan',
  templateUrl: './view-kebutuhan.page.html',
  styleUrls: ['./view-kebutuhan.page.scss'],
})
export class ViewKebutuhanPage implements OnInit {
  kebutuhan:any;
  dataReturned:any;

  constructor(
    private kebutuhanService: KebutuhanService,
    private storage: Storage,
    public modalCtrl: ModalController
  ) {

  }
 
  ngOnInit() {
    this.storage.get('id_usaha').then((response) => {
      if (response) {
          this.kebutuhanService.get_list_data_kebutuhan(response['id_usaha']).subscribe(datas => {
            this.kebutuhan = datas.map(data=>{
              return {
                isEdit: false,
                id:data.payload.doc.id,
                harga:data.payload.doc.data()['harga'],
                nama: data.payload.doc.data()['nama'],
                satuan: data.payload.doc.data()['satuan'],
                status: data.payload.doc.data()['status'],
                stockable: data.payload.doc.data()['stockable'],
                stok: data.payload.doc.data()['stok'],
              }
              })
            })
          }
    })
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: InputKebutuhanPage,
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

 
  RemoveRecord(rowID) {
    this.kebutuhanService.delete_Kebutuhan(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditNama = record.nama;
    record.EditHarga = record.harga;
    record.EditSatuan = record.satuan;
    if(record.status === true){
      record.EditStatus = "true";
    }else{
      record.EditStatus = "false";
    }
    if(record.stockable === true){
      record.EditStockable = "true";
    }else{
      record.EditStockable = "false";
    }
    record.EditStok = record.stok;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['harga'] = recordRow.EditHarga;
    record['nama'] = recordRow.EditNama;
    record['satuan'] = recordRow.EditSatuan;
    if(recordRow.EditStatus == "true"){
      record['status'] = true;
    }else{
      record['status'] = false;
    }
    if(recordRow.EditStockable == "true"){
      record['stockable'] = true;
    }else{
      record['stockable'] = false;
    }
    record['stok'] = recordRow.EditStok;
    this.kebutuhanService.update_Kebutuhan(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
