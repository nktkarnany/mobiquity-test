import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Config } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { HomeModule } from '../pages/home/home.module';
import { ArticlesPageModule } from '../pages/articles/articles.module';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

@NgModule({
	declarations: [
		MyApp,
        LoginPage,
        SignupPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
		AgmCoreModule.forRoot(),

        AngularFireModule.initializeApp(firebaseConfig.fire),
		ComponentsModule,
		HomeModule,
		ArticlesPageModule,
        NgxErrorsModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
        LoginPage,
        SignupPage
	],
	providers: [
		Config,
		StatusBar,
        AngularFireAuth,
        AuthService
	]
})
export class AppModule {
}
