class Pagination extends HTMLElement {
    constructor() {
		super();		
	}			
	
	connectedCallback() {        		
        let actualPage = this.getAttribute('actual')
        let nextPage = this.getAttribute('next')
        let prevPage = this.getAttribute('prev')

        let div = document.createElement('div');        
        div.className = 'pagination'
        
        div.innerHTML = `
        <button class="pagination__back-btn ${prevPage == "false" ? 'disabled' : ''}" 
                ${prevPage == "false" ? "disabled='disabled'" : ""}
                state="${nextPage}"
        >Back</button>
         
        <div class="pagination__acutal-page">${actualPage}</div>  
        
         <button class="pagination__fwd-btn ${nextPage == "false" ? 'disabled' : ''}" 
                ${nextPage == "false" ? "disabled='disabled'" : ""}
                state="${nextPage}"
        >Next</button>`
        this.render(this, div)    
    }
        

    render(self, el) {
        return self.appendChild(el)
    }
}
customElements.define('pagination-comp', Pagination);