import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../service/authentication.service';
import { UsahaService } from './../service/usaha.service';
import { Router } from '@angular/router';
import { AlertService } from './../service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  usaha: any;
  id_usaha: any;
  id: any;

  constructor(
    private authService: AuthenticationService, 
    private usahaService: UsahaService,
    private router: Router,
    private alert: AlertService,  
  ) { }

  ngOnInit() {
  }

  gotoRegister(){
    this.router.navigateByUrl('register')
  }

  onClick(){
    this.usahaService.get_Login(this.username,this.password).subscribe(
      data=>{
        if(data.length == 0) {
          this.alert.presentAlert('Informasi!','Data yang dimasukan salah');
        }else{
          this.usaha = data.map(e => {
            return {
              id_usaha: e.payload.doc.id,
            };
          })
          this.authService.login(this.usaha[0])
      }
      this.username = "";
      this.password = "";
    })
  }

}
