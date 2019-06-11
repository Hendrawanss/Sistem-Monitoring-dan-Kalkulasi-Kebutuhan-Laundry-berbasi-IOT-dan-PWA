import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TransaksiService } from './../service/transaksi.service';
import { KebutuhanService } from './../service/kebutuhan.service';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-input-transaksi',
  templateUrl: './input-transaksi.page.html',
  styleUrls: ['./input-transaksi.page.scss'],
})
export class InputTransaksiPage implements OnInit {
  data:any;
  idUsaha:string;
  idKebutuhan:string;
  nama:string;
  type:string;
  jumlah:number; //pemakaian kebutuhan
  berat:number; //Kiloan
  tglMasuk:Date;
  tglKeluar:Date;


  constructor(
    private modalController: ModalController,
    private trans:TransaksiService,
    private kebutuhan:KebutuhanService,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.storage.get('id_usaha').then((response) => {
      if (response) {
        this.kebutuhan.get_list_stockable_kebutuhan(response['id_usaha']).subscribe(items =>{
          this.data = items.map(item => {
            return{
              id: item.payload.doc.id,
              nama: item.payload.doc.data()['nama'],
            }
          })
          console.log(this.data)
        })
      }
    })
  }

  setTransaksi(){
    let transaksiReq = {};
    let record = {};
    // Update Stok
    this.storage.get('id_usaha').then((response) => {
      if (response) {
          transaksiReq['id_kebutuhan'] = this.idKebutuhan;
          transaksiReq['id_usaha'] = response['id_usaha'];
          transaksiReq['nama_pelanggan'] = this.nama;
          if(this.type == "1"){
              transaksiReq['type'] = "Pengurangan";
          }else{
              transaksiReq['type'] = "Penambahan";
          }
          transaksiReq['jumlah'] = this.jumlah;
          transaksiReq['berat'] = this.berat;
          transaksiReq['tgl_masuk'] = firebase.firestore.Timestamp.fromDate(new Date(this.tglMasuk));
          transaksiReq['tgl_keluar'] = firebase.firestore.Timestamp.fromDate(new Date(this.tglKeluar));
          this.trans.create_NewTransaksiKebutuhan(transaksiReq).then(resp => {
            this.nama = "";
            this.idUsaha = ""
            this.idKebutuhan = "";
            this.type = "";
            this.jumlah = 0;
            this.berat = 0;
            this.tglMasuk = new Date();
            this.tglKeluar = new Date();
            //Menambah kebutuhan wajib
          }).catch(error => {
              console.log(error);
          });
        }
      });
  }

  updateStok(jenis){
    let record = {};
    if(jenis == "1"){
      this.kebutuhan.get_Single(this.idKebutuhan).subscribe(dataSnaps => {
        record['stok'] = ( dataSnaps['stok'] - this.jumlah );
        this.kebutuhan.update_Kebutuhan(this.idKebutuhan, record);
        console.log('Sukses Dikurangi');
      })
    }else{
      this.kebutuhan.get_Single(this.idKebutuhan).subscribe(dataSnaps => {
        record['stok'] = ( dataSnaps['stok'] + this.jumlah );
        this.kebutuhan.update_Kebutuhan(this.idKebutuhan, record);
        console.log('Sukses Ditambah');
      })
    }
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
