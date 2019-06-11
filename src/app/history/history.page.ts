import { Component, OnInit } from '@angular/core';
import { TransaksiService } from './../service/transaksi.service';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { distinct } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})

export class HistoryPage  {
  
  arr = [{
    'Tanggal': ''
  },];


  constructor( 
    private router: Router,
    public navCon: NavController,
    private transaksiService: TransaksiService,
    private storage: Storage) 
    {
      this.storage.get('id_usaha').then((response) => {
        if (response) {
          // this.transaksiService.get_date(response['id_usaha']).subscribe(
          //   data => {

          //     // data.forEach((item)=> {
          //     //   for (var i = 0; i <= data.length - 1; i++) {
          //     //     var duplicate = false;  
          //     //       for(var j = this.arr.length - 1; j >= 0; j--){
          //     //         this.arr[j].Tanggal = data[i]['Tanggal']
          //     //           if(data[i]['Tanggal'] == this.arr[j].Tanggal) duplicate = true;
          //     //         }
          //     //     if(duplicate == false){
          //     //       this.arr.push(data[i]['Tanggal'])
          //     //     }
          //     //   }
          //     // })
          //     console.log(this.arr)
          //   })
        }
      });
    }
  

  detail(param){
    this.router.navigateByUrl('detail-history/'+param);
    console.log(param);
  }
    

}
