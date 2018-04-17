import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { ArticlesService } from './articles.service';
import { Post } from './models/post.model';

@Component({
	templateUrl: 'articles.html',
	providers: [ArticlesService]
})
export class ArticlesPage implements OnInit {
	public posts: Post[];
	private loading;

	constructor(
		private loadingCtrl: LoadingController,
		private articlesService: ArticlesService,
		private nav: NavController
	) {
		this.loading = this.loadingCtrl.create({ content: 'Fetching, please wait...' });
		this.loading.present();
	}

	ngOnInit(): void {
		this.articlesService.getPosts()
			.subscribe(posts => {
				this.posts = posts;
				this.loading.dismiss();
			});
	}
}
