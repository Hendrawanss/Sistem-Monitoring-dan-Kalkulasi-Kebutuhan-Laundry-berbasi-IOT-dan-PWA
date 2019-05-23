import { Component, OnInit } from '@angular/core';
import { TransaksiService } from './../service/transaksi.service';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage  {
  transaksi: any;
  result:any;
  idTrans:any;
  idKebutuhan:string;
  idUsaha:string;
  Proses:string;
  Total:number;
  Tanggal: Date;

  constructor( 
    private router: Router,
    public navCon: NavController,
    private transaksiService: TransaksiService,
    private storage: Storage) 
    {
      this.storage.get('id_usaha').then((response) => {
        if (response) {
          this.transaksiService.get_All_Doc('ID Usaha',response['id_usaha']).subscribe(
            data=>{
              this.result = data.map(e => {
                return {
                  idTrans: e.payload.doc.id,
                  idKebutuhan: e.payload.doc.data()['ID Kebutuhan'],
                  idUsaha: e.payload.doc.data()['ID Usaha'],
                  Proses: e.payload.doc.data()['Proses'],
                  Total: e.payload.doc.data()['Total'],
                  Tanggal: e.payload.doc.data()['Tanggal'],
                };
              })  
              console.log(this.result)
            })
        }
      });
    }
  

  detail(param){
    this.router.navigateByUrl('detail-history/'+param);
  }
    

}
