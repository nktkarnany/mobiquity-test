import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { ArticlesPage } from '../articles/articles';

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
			title: 'Articles',
			path: 'articles',
			component: ArticlesPage
		}], [{
			title: 'Articles',
			path: 'articles',
			component: ArticlesPage
		}]];
	}
}
