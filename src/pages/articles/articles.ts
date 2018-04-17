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
    public limit;
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
        
        Promise.all([this.storage.get('category'), this.storage.get('limit')]).then(values => {

            if (values[0])
                this.category = values[0];
            else
                this.category = 'sports';
            if (values[1])
                this.limit = values[1];
            else
                this.limit = 5;

            this.articlesService.getPosts(this.category, this.limit)
                .subscribe(posts => {
                    this.posts = posts;
                    this.loading.dismiss();
                });

        });
	}
}
