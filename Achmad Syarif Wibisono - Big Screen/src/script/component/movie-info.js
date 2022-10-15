class MovieInfo extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set movie(movie) {
      this._movie = movie;
      this.render();
    }
   
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: flex;
            margin: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            width: 200px;
          }
          
          .poster_path {
            border-radius: 10px;
            width: 100%;
            height: auto;
            max-height: 250px;
            object-fit: cover;
            object-position: center;
          }
          
          
          .movie-info {
            padding: 24px;
          }
          
          .movie-info > h2 {
            font-weight: lighter;
            margin-top: 20px;
          }
          
          .movie-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; 
          }
          span{
            font-size: 15px;
            border-radius: 50px;
            border: 2px solid #150050;
            padding: 5px;
          }

          @media only screen and (max-width: 600px) {
            :host {
              width: 300px;
            }
          }
          
        </style>
        <div>
        <img class="poster_path" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="${this._movie.title}">
        <div class="movie-info">
          <span class="${this._movie.vote_average}">${this._movie.vote_average}</span>
          <h2>${this._movie.title}</h2>
          <p>${this._movie.overview}</p>
        </div>
      `;
    }
  }
   
  customElements.define('movie-info', MovieInfo);