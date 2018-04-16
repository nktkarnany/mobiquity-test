import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Config } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';

@NgModule({
	declarations: [
		MyApp,
        LoginPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),

        AngularFireModule.initializeApp(firebaseConfig.fire),
		ComponentsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
        LoginPage
	],
	providers: [
		Config,
		StatusBar,
        AngularFireAuth
	]
})
export class AppModule {
}
