import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data:{}

  constructor(private db: AngularFirestore){
    this.db.collection('bulan', ref => ref.orderBy('tahun')).valueChanges().subscribe(items=>{
      items.forEach(item => {
        item['nama'] = new Date(item['tahun'], item['bulan']);
      })
      this.data = items
    })
  }
}
