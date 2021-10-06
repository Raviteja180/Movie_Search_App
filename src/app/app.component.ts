import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieSearch';
  movieName :any = "";
  url: any;
  res: any;
  movies: any;
  async handleMovies() {
   this.url = `https://api.themoviedb.org/3/search/movie?api_key=c7e162477b3d1f286cbe911ecc7f73a4&language=en-US&query=${this.movieName}&page=1&include_adult=false`;
  
  //  this.url = `https://jsonplaceholder.typicode.com/users`;
   

     this.res = await fetch(this.url);
    const data: any = await this.res.json();
    console.log(data.results);
    this.movies = data.results;
  }
}
