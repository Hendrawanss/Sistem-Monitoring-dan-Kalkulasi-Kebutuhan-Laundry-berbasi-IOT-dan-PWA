import { Component, OnInit } from '@angular/core';
import { UsahaService } from './../service/usaha.service';
import { AlertService } from './../service/alert.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

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
  data: any;
  loaderToShow: any;

  constructor(
    private router: Router,
    private usahaService: UsahaService, 
    private storage: Storage,
    private alertCtrl: AlertService) 
    { 
      this.storage.get('id_usaha').then((response) => {
        if (response) {
          this.usahaService.get_Single(response['id_usaha']).subscribe(
            data=>{
              this.usaha = data;
              console.log(data);
          });  
        }
      });
    }

  gotoKebutuhanPage(){
    this.router.navigate(['view-kebutuhan']);
  }
  gotoHistoryPage(){
    this.router.navigate(['history']);
  }
  gotoAboutPage(){
    
  }
  gotoPengadaanPage(){
    
  }
  gotoPanduanPage(){
    
  }
  userLogout(){
    this.alertCtrl.presentAlertLogout();
  }

  ngOnInit() {
  }
}
