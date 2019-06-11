import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) { 
      this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.storage.get('id_usaha').then((response) => {
      if (response) {
        this.authState.next(true);
      }else{
        
      }
    });
  }

  login(id) {
    this.storage.set('id_usaha', id).then((response) => {
      this.router.navigate(['user/tabs/tab1']);
      this.authState.next(true);
    });
  }
 
  logout() {
    this.storage.remove('id_usaha').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authState.value;
  }

}
