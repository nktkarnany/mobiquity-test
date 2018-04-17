import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { WordpressListPage } from '../wordpress/list/wordpress.list.page';

import { Tile } from './models/tile.model';

@Component({
	templateUrl: 'home.html',
	providers: []
})
export class HomePage {
	public tiles: Tile[][];

	private nav: Nav;

	constructor(
		nav: Nav
	) {
		this.nav = nav;
		this.initTiles();
	}

	public navigateTo(tile) {
		this.nav.setRoot(tile.component);
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Wordpress',
			path: 'wordpress-articles',
			icon: 'logo-wordpress',
			component: WordpressListPage
		}]];
	}
}
