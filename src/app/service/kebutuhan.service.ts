import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class KebutuhanService {

  constructor(private firestore: AngularFirestore) { }

  create_NewKebutuhan(record) {
    return this.firestore.collection('Kebutuhan').add(record);
  }
 
  read_Kebutuhan() {
    return this.firestore.collection('Kebutuhan').snapshotChanges();
  }
 
  update_Kebutuhan(recordID,record){
    this.firestore.doc('Kebutuhan/' + recordID).update(record);
  }
 
  delete_Kebutuhan(record_id) {
    this.firestore.doc('Kebutuhan/' + record_id).delete();
  }

  get_Single(id){
    return this.firestore.collection('Kebutuhan').doc(id).valueChanges();
  }

  get_Doc(field,exp,id){
    return this.firestore.collection('Kebutuhan', ref => ref.where(field, exp, id)).snapshotChanges();
  }
}
