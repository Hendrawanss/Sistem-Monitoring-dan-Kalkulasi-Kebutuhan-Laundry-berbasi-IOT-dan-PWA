import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import {KebutuhanService} from './../service/kebutuhan.service'

@Component({
  selector: 'app-view-kebutuhan',
  templateUrl: './view-kebutuhan.page.html',
  styleUrls: ['./view-kebutuhan.page.scss'],
})
export class ViewKebutuhanPage implements OnInit {
  kebutuhan:any;
  harga:string;
  nama:string;
  satuan:string;
  status:boolean;
  stockable:boolean;
  stok:string;

  constructor(
    private kebutuhanService: KebutuhanService,
    private storage: Storage,
    private router: Router,
  ) { }
 
  ngOnInit() {
    this.storage.get('id_usaha').then((response) => {
      if (response) {
          this.kebutuhanService.get_Doc('ID Usaha','==',response['id_usaha']).subscribe(data => {
            this.kebutuhan = data.map(e => {
              return {
                id: e.payload.doc.id,
                isEdit: false,
                Nama: e.payload.doc.data()['Nama'],
                Harga: e.payload.doc.data()['Harga'],
                Satuan: e.payload.doc.data()['Satuan'],
                Stok: e.payload.doc.data()['Stok'],
              };
            })
            console.log(this.kebutuhan);
      
          });
      }
    })
  }
 
  CreateRecord() {
    let record = {};
    this.storage.get('id_usaha').then((response) => {
      if (response) {
        record['Harga'] = this.harga;
        record['ID Usaha'] = response['id_usaha'];
        record['Nama'] = this.nama;
        record['Satuan'] = this.satuan;
        record['Status'] = this.status;
        record['Stockable'] = this.stockable;
        record['Stok'] = this.stok;
        this.kebutuhanService.create_NewKebutuhan(record).then(resp => {
          this.harga = "";
          this.nama = "";
          this.satuan = "";
          this.status = true;
          this.stockable = true;
          this.stok = "";
          console.log(resp);
        }).catch(error => {
            console.log(error);
        });
      }
    });
  }
 
  RemoveRecord(rowID) {
    this.kebutuhanService.delete_Kebutuhan(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditNama = record.Nama;
    record.EditHarga = record.Harga;
    record.EditSatuan = record.Satuan;
    record.EditStatus = record.Status;
    record.EditStockable = record.Stockable;
    record.EditStok = record.Stok;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Harga'] = recordRow.EditNama;
    record['Nama'] = recordRow.EditHarga;
    record['Satuan'] = recordRow.EditSatuan;
    record['Status'] = recordRow.EditStatus;
    record['Stockable'] = recordRow.EditStockable;
    record['Stok'] = recordRow.EditStok;
    this.kebutuhanService.update_Kebutuhan(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
