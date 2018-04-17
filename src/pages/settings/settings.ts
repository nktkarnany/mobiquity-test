import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticlesPage } from '../articles/articles';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  limit: number;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private storage: Storage
  ) {
      this.storage.get('limit').then((val) => {
          if (val)
              this.limit = val;
      });
  }

  saveLimit(){
      this.storage.set('limit', this.limit);
      this.navCtrl.setRoot(ArticlesPage);
  }

}
