class ListingPage extends HTMLElement {
    constructor() {
        super();
        this.context = this;        
        this.getClientRects = this.getClientRects.bind(this);
        this.populateList = this.populateList.bind(this);        
    }

    connectedCallback() {                
        this.getClientRects(this.populateList, () => { return }, this, 1);
    }

    getClientRects(cbSuc, cbErr, self, page) {              
        new Promise((resolve, reject) => {
            
            let headers = new Headers();
            headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

            const url = `http://localhost:3001/real-state-list/${page ? page : 1}`;
            return fetch(url)
                .then(http => http.json())
                .then(response => {
                    if (response.status === 200) {                        
                        resolve(cbSuc(response, self))
                    } else {
                        cbErr(response)
                        reject(new Error('error'))
                    }
                }, error => {
                    reject(new Error(error.message))
                })
        })
    }

    populateList(data, self) {

        if (data && data.response.list) {

            const jsonList = JSON.stringify(data.response);
            const actual = JSON.stringify(data.response.actualPage)
            const next = JSON.stringify(data.response.nextPage)
            const prev = JSON.stringify(data.response.previousPage)
            self.innerHTML = `
                                <listing-comp information='${jsonList}'></listing-comp> 
                                <pagination-comp actual='${actual}' next='${next}' prev='${prev}'></pagination-comp>
                                `;

            document.querySelector('.pagination__back-btn').addEventListener('click', e => {
                let page = Number(document.querySelector('.pagination__acutal-page').innerHTML);
                let prev = e.target && e.target.getAttribute('state');
                
                if (prev == "false") {
                    page = 1;                    
                } else {
                    page = (Number(page) - 1).toString();
                }

                this.getClientRects(this.context.populateList, () => { return }, self, page)
            })                    
     
            document.querySelector('.pagination__fwd-btn').addEventListener('click', e => {
                
                let page = Number(document.querySelector('.pagination__acutal-page').innerHTML);
                let next = e.target && e.target.getAttribute('state');
                
                if (next == "true") {
                    page = (Number(page) + 1).toString();
                }                
                this.getClientRects(self.populateList, () => { return }, self, page)
            })
        }
    }
    render(self) {
        return self.innerHTML = `
                                <listing-comp></listing-comp> 
                                <pagination-comp></pagination-comp>
                                `;
    }
}

customElements.define('listing-page', ListingPage);