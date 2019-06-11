import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {
  tran:any;
  result:any;

  constructor(private firestore: AngularFirestore) { }

  create_NewTransaksiKebutuhan(record) {
    return this.firestore.collection('TransaksiKebutuhan').add(record);
  }
 
  read_TransaksiKebutuhan() {
    return this.firestore.collection('TransaksiKebutuhan').snapshotChanges();
  }
 
  update_TransaksiKebutuhan(recordID,record){
    this.firestore.doc('TransaksiKebutuhan/' + recordID).update(record);
  }
 
  delete_TransaksiKebutuhan(record_id) {
    this.firestore.doc('TransaksiKebutuhan/' + record_id).delete();
  }

  // Fungsi Tambahan 

  // Fungsi pada Tab 1 - Status Laundry

  get_process_data(){
    return this.firestore.collection('Transaksi', ref => ref.where('status', '==', '2')).snapshotChanges();
  }


  get_data_history(field,id){
    return this.firestore.collection('Transaksi', ref => ref.where(field, '==', id)).snapshotChanges();
  }

  get_real_time_transaksi(id_usaha,bulan, tahun){
    let next_bulan, next_tahun;

    if (bulan == 11) {
      next_bulan = 1;
      next_tahun = tahun + 1;
    } else {
      next_bulan = bulan + 1;
      next_tahun = tahun;
    }
    return this.firestore.collection('Transaksi', ref => ref.where('id_usaha', '==', id_usaha).where('tgl_masuk','>=', firebase.firestore.Timestamp.fromDate(new Date(tahun, bulan, 1))).where('tgl_masuk','<',firebase.firestore.Timestamp.fromDate(new Date(next_tahun, next_bulan, 1)))).valueChanges();
  }

}
