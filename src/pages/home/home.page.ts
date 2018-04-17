import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
		nav: Nav,
        public storage: Storage
	) {
		this.nav = nav;
		this.initTiles();
	}

	public navigateTo(tile) {
        this.storage.set('category', tile.path);
		this.nav.setRoot(tile.component);
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Sports',
			path: 'sports',
			component: ArticlesPage
		}], [{
			title: 'Politics',
			path: 'politics',
			component: ArticlesPage
		}], [{
			title: 'Technology',
			path: 'technology',
			component: ArticlesPage
		}], [{
			title: 'Food',
			path: 'food',
			component: ArticlesPage
		}], [{
			title: 'News',
			path: 'news',
			component: ArticlesPage
		}], [{
			title: 'Music',
			path: 'music',
			component: ArticlesPage
		}], [{
			title: 'Funny',
			path: 'funny',
			component: ArticlesPage
		}], [{
			title: 'Gaming',
			path: 'gaming',
			component: ArticlesPage
		}], [{
			title: 'Art',
			path: 'art',
			component: ArticlesPage
		}]];
	}
}
