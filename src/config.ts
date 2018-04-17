import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public redditApiUrl = 'https://www.reddit.com/r/';
}

export const firebaseConfig = {
	fire: {
        apiKey: 'AIzaSyCuUwHXoa1ds5samVJv1sYlb3NhHQxP5Tc',
        authDomain: 'mobiquity-534ce.firebaseapp.com',
        databaseURL: 'https://mobiquity-534ce.firebaseio.com',
        projectId: 'mobiquity-534ce',
        storageBucket: 'mobiquity-534ce.appspot.com',
        messagingSenderId: '1047726405202'
    }
};