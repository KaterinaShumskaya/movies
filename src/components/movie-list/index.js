import movie from '../movie';

export default class MovieList{
    drawToDom(selector){
        this.clearData(selector);
        selector.appendChild(this.fragment);
    }

    renderMovies(data){
        this.fragment = document.createDocumentFragment();
    
        data.forEach(item => {
            const article = document.createElement('article');
            article.classList.add('movie');
            article.innerHTML = movie(item);
            this.fragment.appendChild(article);
        });
    }

    clearData(selector){
        selector.innerHTML = "";
    }
}
