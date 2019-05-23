import { Component } from '@angular/core';
import { KebutuhanService } from './../service/kebutuhan.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  kebutuhan: any;

  constructor(
    private kebutuhanService: KebutuhanService,
    private storage: Storage
  ){}

  ngOnInit(){
    this.storage.get('id_usaha').then((response) => {
      if (response) {
        this.kebutuhanService.get_Doc('ID Usaha','==',response['id_usaha']).subscribe(
          data=>{
              this.kebutuhan = data.map(e => {
                return {
                  id: e.payload.doc.id,
                  Nama: e.payload.doc.data()['Nama'],
                  Stok: e.payload.doc.data()['Stok'],
                  Satuan: e.payload.doc.data()['Satuan'],
                };
              }) 
            console.log(this.kebutuhan);
        });  
      }
    });
  }

}
