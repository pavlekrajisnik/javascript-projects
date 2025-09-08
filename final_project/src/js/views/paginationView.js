import icons from 'url:../../img/icons.svg';
import View from './View.js';
export class paginationView extends View {
 _parentElement = document.querySelector(".pagination");

 _generateMarkup(){
  const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
  const currPage = this._data.page;
  console.log(numPages);
  console.log('currPage:', currPage, 'numPages:', numPages);

    if(currPage === 1 && numPages > 1){
      return `
            <button class="btn--inline pagination__btn--next">
              <span>Page ${currPage+1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button> 
          `;
    }

    if(currPage === numPages && numPages > 1){
          return `
            <button class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${numPages - 1}</span>
            </button>
          `;
    }

       if (currPage < numPages){
       return `
            <button class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${currPage - 1}</span>
            </button>
             <button class="btn--inline pagination__btn--next">
              <span>Page ${currPage + 1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button> 
          `;
    }
     return 'only 1 page';
  }
}

export default new paginationView()