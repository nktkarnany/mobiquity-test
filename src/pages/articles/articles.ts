import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { ArticlesService } from './articles.service';
import { Post } from './models/post.model';

import { Storage } from '@ionic/storage';

@Component({
	templateUrl: 'articles.html',
	providers: [ArticlesService]
})
export class ArticlesPage implements OnInit {
	public posts: Post[];
    public category;
	private loading;

	constructor(
		private loadingCtrl: LoadingController,
		private articlesService: ArticlesService,
		private nav: NavController,
        private storage: Storage
	) {
		this.loading = this.loadingCtrl.create({ content: 'Fetching, please wait...' });
		this.loading.present();
	}

	ngOnInit(): void {
        this.storage.get('category').then((val) => {
            this.category = val;
            this.articlesService.getPosts(val)
                .subscribe(posts => {
                    this.posts = posts;
                    this.loading.dismiss();
                });
        });
	}
}
