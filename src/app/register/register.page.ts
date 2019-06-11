import { Component, OnInit } from '@angular/core';
import { UsahaService } from './../service/usaha.service';
import { KebutuhanService } from './../service/kebutuhan.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  namaUsaha:string;
  username:string;
  password:string;
  alamat:string;
  constructor(
    private usahaService: UsahaService,
    private kebutuhanService: KebutuhanService,
    private router: Router,
    public toastController: ToastController
  ) { }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  gotoLogin(){
    this.router.navigateByUrl('login')
  }

  onClick(){
    let record = {};
    record['nama_usaha'] = this.namaUsaha;
    record['alamat'] = this.alamat;
    record['username'] = this.username;
    record['password'] = this.password;
    this.usahaService.create_NewUsaha(record).then(resp => {
      this.namaUsaha = "";
      this.alamat = "";
      this.username = "";
      this.password = "";
      //Menambah kebutuhan wajib
      this.addDataKebutuhan("1468",resp.id,"Listrik","kWh",true,false,null)
      this.addDataKebutuhan("4850",resp.id,"Air","Kubik",true,false,null)
      this.presentToast("Registrasi Berhasil")
      this.router.navigateByUrl('login')
      console.log(resp.id);
    }).catch(error => {
        this.presentToast("Registrasi Gagal")
        console.log(error);
    });
  }

  addDataKebutuhan(harga,id,nama,satuan,status,stockable,stok){
    let record = {};
    record['harga'] = harga;
    record['id_usaha'] = id;
    record['nama'] = nama;
    record['satuan'] = satuan;
    record['status'] = status;
    record['stockable'] = stockable;
    record['stok'] = stok;
    this.kebutuhanService.create_NewKebutuhan(record).then(resp => {
      console.log(resp.id);
    }).catch(error => {
        console.log(error);
    });
  }

  ngOnInit() {
  }

}
