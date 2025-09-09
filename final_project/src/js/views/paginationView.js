import icons from 'url:../../img/icons.svg';
import View from './View.js';
export class paginationView extends View {
 _parentElement = document.querySelector(".pagination");

 _generateLeftMarkup(currPage){
             return  `
                <button class="btn--inline pagination__btn--prev" data-goto="${currPage-1}">
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                  </svg>
                  <span>Page ${currPage - 1}</span>
                </button>
              `;
  };
  _generateRightMarkup(currPage){
         return `
            <button class="btn--inline pagination__btn--next" data-goto="${currPage+1}">
              <span>Page ${currPage+1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button> 
          `;
  };

  addHandlerClick(handler){
    this._parentElement.addEventListener("click",function(e){
      const btn = e.target.closest(".btn--inline"); // uzima se closest parent element i osluskuje na koji se desio event.
      if (!btn) return;  
      const goToPage = +btn.dataset.goto; // +  pretvori string u broj
      handler(goToPage);
    })
  };
 _generateMarkup(){
  const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
  const currPage = this._data.page;
  console.log(numPages);
  console.log('currPage:', currPage, 'numPages:', numPages);


    if(currPage === 1 && numPages > 1){
       return this._generateRightMarkup(currPage);
    }

    if(currPage === numPages && numPages > 1){
         return this._generateLeftMarkup(currPage);
    }

       if (currPage < numPages){
        return this._generateLeftMarkup(currPage) + this._generateRightMarkup(currPage);
    }
     return 'only 1 page';
  }
}

export default new paginationView()