import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as myGlobals1 from '../../list';
import * as myGlobals from '../accessories';
var page=new myGlobals1.ListPage(myGlobals1.h1,myGlobals1.h2,myGlobals1.h3);
@IonicPage()
@Component({
  selector: 'page-accessories1Detail',
  templateUrl: 'accessories1Detail.html'
})

export class accessories1DetailPage {
 posts: any;
 load:any;
  constructor(public navCtrl: NavController, public http: Http) {
       this.posts=myGlobals1.accessories1[myGlobals.k1];
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      page.refresh(refresher);
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  openModal(id,name,images) {

		this.navCtrl.push("OrderPage",{id,name,images});
	}
}
