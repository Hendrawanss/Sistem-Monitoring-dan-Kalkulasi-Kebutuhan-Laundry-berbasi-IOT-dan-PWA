import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-detail-history',
  templateUrl: './detail-history.page.html',
  styleUrls: ['./detail-history.page.scss'],
})
export class DetailHistoryPage implements OnInit {
  mill: any;

  kebutuhan: {}
  trans:any;
  items = [];
  result: any;

  constructor(
    private firestore: AngularFirestore,
    private activeRoute: ActivatedRoute,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.mill = this.activeRoute.snapshot.paramMap.get('millis');
    this.storage.get('id_usaha').then((response) => {
      if (response) {
        this.trans = this.firestore.collection('Transaksi', ref => ref.where('Tanggal','==', firebase.firestore.Timestamp.fromMillis(this.mill))).get().subscribe(docSnaps => {
          docSnaps.forEach((doc) => {
            this.items[doc.id] = doc.data()
            this.firestore.collection('Kebutuhan').doc(doc.data()['ID Kebutuhan']).get().subscribe(docSnap => {
              this.items[doc.id].nama = docSnap.data().Nama;
              this.items[doc.id].harga = docSnap.data().Harga;
              this.items[doc.id].satuan = docSnap.data().Satuan;
            });
          })
          console.log(this.items)
        })  
      }
    })
  }
}
