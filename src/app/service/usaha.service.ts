import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsahaService {

  constructor(private firestore: AngularFirestore) { }

  create_NewUsaha(record) {
    return this.firestore.collection('Usaha').add(record);
  }
 
  read_Usaha() {
    return this.firestore.collection('Usaha').snapshotChanges();
  }
 
  update_Usaha(recordID,record){
    this.firestore.doc('Usaha/' + recordID).update(record);
  }
 
  delete_Usaha(record_id) {
    this.firestore.doc('Usaha/' + record_id).delete();
  }

  get_Single(id){
    return this.firestore.collection('Usaha').doc(id).valueChanges();
  }

  get_Doc(user,pass){
    return this.firestore.collection('Usaha', ref => ref.where('Username', '==', user).where('Password', '==', pass) ).snapshotChanges();
  }

  get_Doc_dinamic(field,id){
    return this.firestore.collection('Usaha', ref => ref.where(field, '==', id)).snapshotChanges();
  }
}