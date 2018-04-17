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
	public tiles: Tile[];

	private nav: Nav;

	constructor(
		nav: Nav,
        public storage: Storage
	) {
		this.nav = nav;
		this.initTiles();
	}

	public navigateTo(tile) {
        this.storage.set('category', tile.path).then(() => {
		  this.nav.setRoot(tile.component);
        });
	}

	private initTiles(): void {
		this.tiles = [{
			title: 'Sports',
			path: 'sports',
            icon: 'football',
			component: ArticlesPage
		}, {
			title: 'Politics',
			path: 'politics',
            icon: 'contacts',
			component: ArticlesPage
		}, {
			title: 'Technology',
			path: 'technology',
            icon: 'desktop',
			component: ArticlesPage
		}, {
			title: 'Food',
			path: 'food',
            icon: 'pizza',
			component: ArticlesPage
		}, {
			title: 'News',
			path: 'news',
            icon: 'information',
			component: ArticlesPage
		}, {
			title: 'Music',
			path: 'music',
            icon: 'musical-note',
			component: ArticlesPage
		}, {
			title: 'Funny',
			path: 'funny',
            icon: 'happy',
			component: ArticlesPage
		}, {
			title: 'Gaming',
			path: 'gaming',
            icon: 'game-controller-b',
			component: ArticlesPage
		}, {
			title: 'Art',
			path: 'art',
            icon: 'clipboard',
			component: ArticlesPage
		}];
	}
}
