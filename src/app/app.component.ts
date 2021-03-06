import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home.page';
import { ArticlesPage } from '../pages/articles/articles';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	@ViewChild(Nav) nav: Nav;

	constructor(
		private app: App,
		private platform: Platform,
		private menu: MenuController,
		private statusBar: StatusBar,
        private auth: AuthService
	) {
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Articles', component: ArticlesPage, icon: 'list' },
			{ title: 'Settings', component: SettingsPage, icon: 'settings' },
			{ title: 'About', component: AboutPage, icon: 'information-circle' }
		];

		this.rootPage = LoginPage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
		});

        this.auth.afAuth.authState
          .subscribe(
            user => {
              if (user) {
                this.rootPage = HomePage;
              } else {
                this.rootPage = LoginPage;
              }
            },
            () => {
              this.rootPage = LoginPage;
            }
          );
	}
    
    login() {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(LoginPage);
    }
    
    logout() {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(HomePage);
    }

	openPage(page) {
		this.menu.close();
		this.nav.setRoot(page.component);
	}
}
