(
    function () {

        const currentDocument = document.currentScript.ownerDocument;

        class Listing extends HTMLElement {
            constructor() {
                super();
            }
       
            connectedCallback() {
                //para usar el shaddow-root y que sea inacceisble
                // const shadowRoot = this.attachShadow({ mode: 'open' });
                // const template = currentDocument.querySelector('#realstate-list-card')
                // const instance = template.content.cloneNode(true);
                // shadowRoot.appendChild(instance)                
                this.className = 'list-section';                        
                const data = JSON.parse(this.getAttribute('information'));            
                this.render(data && data.list, this);
                this.populateList()                
            }

            populateList(data, self) {
        
                if (data) {
                    let list = data.response.list                
                    let doc = document.querySelector('.list-section');
                    let listHtml = ''
                    
                    list.map(card => {
                        const cardStringify = JSON.stringify(card);
                        listHtml += `<realstate-card info='${cardStringify}'></realstate-card>`;
                    })
                    
                    self.innerHTML = listHtml;
                }
            }

           

            render(data, doc) {        
                if (data) {
                    let list = '';
                    data.map(card => {
                        const cardStringify = JSON.stringify(card);
                        list += `<realstate-card info='${cardStringify}'></realstate-card>`;
                    })            
                    doc.innerHTML = list;
                }
            }
        }
        customElements.define('listing-comp', Listing);

    }
)()