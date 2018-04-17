import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';

@Injectable()
export class ArticlesService {
	private articles: Post[];

	constructor(
		private http: Http,
		private config: Config
	) {}

	public getPosts(category, limit): Observable<Post[]> {
		return this.http.get(this.config.redditApiUrl + category + "/top.json?limit=" + limit)
			.map(x => x.json())
			.map(response => {
				this.articles = response.data.children.map((item: any) => this.createArticle(item));
				return this.articles;
			});
	}

	private createArticle(item): Post {
        
        let imageUrl = null;
        
        if (item.data.hasOwnProperty('preview')) {
            imageUrl = item.data.preview.images.length > 0 ? item.data.preview.images[0].source.url : null;
        }
    
		return {
			id: item.data.id,
			title: item.data.title,
			image: imageUrl,
			url: item.data.url
		};
	};
}
