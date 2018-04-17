import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

@NgModule({
	imports: [IonicModule],
	declarations: [HomePage],
	entryComponents: [HomePage],
	providers: []
})
export class HomeModule {

}
