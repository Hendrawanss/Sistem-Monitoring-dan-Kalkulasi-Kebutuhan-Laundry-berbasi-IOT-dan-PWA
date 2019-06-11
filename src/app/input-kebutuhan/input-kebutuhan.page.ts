import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {KebutuhanService} from './../service/kebutuhan.service';

@Component({
  selector: 'app-input-kebutuhan',
  templateUrl: './input-kebutuhan.page.html',
  styleUrls: ['./input-kebutuhan.page.scss'],
})
export class InputKebutuhanPage implements OnInit {

  kebutuhan:any;
  harga:string;
  nama:string;
  satuan:string;
  status:string;
  stockable:string;
  stok:string;
  isEdit: boolean;

  constructor(
    private kebutuhanService: KebutuhanService,
    private storage: Storage,
  ) { }

  ngOnInit() {
  }

  CreateRecord() {
    let record = {};
    this.storage.get('id_usaha').then((response) => {
      if (response) {
        record['harga'] = this.harga;
        record['id_usaha'] = response['id_usaha'];
        record['nama'] = this.nama;
        record['satuan'] = this.satuan;
        if(this.status == "true"){
          record['status'] = true;
        }else{
          record['status'] = false;
        }
        if(this.stockable == "true"){
          record['stockable'] = true;
        }else{
          record['stockable'] = false;
        }
        record['stok'] = this.stok;
        this.kebutuhanService.create_NewKebutuhan(record).then(resp => {
          this.harga = "";
          this.nama = "";
          this.satuan = "";
          this.status = "";
          this.stockable = "";
          this.stok = "";
          console.log(resp);
        }).catch(error => {
            console.log(error);
        });
      }
    });
  }

}
