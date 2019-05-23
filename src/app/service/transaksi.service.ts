import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {
  tran:any;
  result:any;

  constructor(private firestore: AngularFirestore) { }

  create_NewTransaksi(record) {
    return this.firestore.collection('Transaksi').add(record);
  }
 
  read_Transaksi() {
    return this.firestore.collection('Transaksi').snapshotChanges();
  }
 
  update_Transaksi(recordID,record){
    this.firestore.doc('Transaksi/' + recordID).update(record);
  }
 
  delete_Transaksi(record_id) {
    this.firestore.doc('Transaksi/' + record_id).delete();
  }

  get_Single_Doc(id){
    return this.firestore.collection('Transaksi').doc(id).valueChanges();
  }

  get_All_Doc(field,id){
    return this.firestore.collection('Transaksi', ref => ref.where(field, '==', id)).snapshotChanges();
  }

  get_data_history(field,id){
    return this.firestore.collection('Transaksi', ref => ref.where(field, '==', id)).snapshotChanges();
  }

}
