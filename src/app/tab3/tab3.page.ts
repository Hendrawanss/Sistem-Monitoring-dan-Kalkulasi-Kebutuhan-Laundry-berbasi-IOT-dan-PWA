import { Component, OnInit } from '@angular/core';

import { UsahaService } from './../service/usaha.service';
import { NavController,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usaha: any;
  usahaName: String;
  usahaAlamat: String;
  usahaUsername: String;
  usahaPassword: String;
  cek: any[];
  loaderToShow: any;

  constructor(
    private usahaService: UsahaService, 
    public loadingController: LoadingController, 
    public navCon: NavController) 
    { 
      this.usahaService.get_Single('contoh').subscribe(
        data=>{
          // this.showLoader();
          this.usaha = data;
          // this.loadingController.dismiss();
          console.log(data);
      }); 
    }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Mohon Tunggu Sebentar'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    this.hideLoader();
  }
 
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 2000);
  }

  ngOnInit() {
    //Get Multiple Data

    // this.usahaService.read_Usaha().subscribe(data => {
    //   this.usaha = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isEdit: false,
    //       Nama: e.payload.doc.data()['Nama'],
    //       Alamat: e.payload.doc.data()['Alamat'],
    //       Username: e.payload.doc.data()['Username'],
    //       Password: e.payload.doc.data()['Password'],
    //     };
    //   })
    //   console.log(this.usaha);
    // });
    
    //Get Single Data
    
    
    // this.usahaService.get_Single('contoh').subscribe(data=>{
    //   this.usaha = data;
    //   console.log(data);
    // }); 
  }
}
