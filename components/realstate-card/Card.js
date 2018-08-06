const currentDocument = document.currentScript.ownerDocument;

class RealStateCard extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', e => {
            this.markElementAsActive()
        });
    }

    markElementAsActive() {        
        if (this.classList.contains('active')) {
            document.querySelector('realstate-card.active').classList.remove('active')
            this.classList.remove('active')
        } else {
            this.classList.add('active');
        }
    }

    connectedCallback() {                
        const data = JSON.parse( this.getAttribute('info'))    
        this.render(data, this)
    }

    formatCurrency(val) {
        return `${val.toLocaleString('es-ES')} €`
    }

    render(data, self) {  
        
        const tagsStringify = JSON.stringify(data.realStateTag)
       self.innerHTML = `                        
            <div class="card__bg">
                <img class="card__main-img" 
                src="${data.realStateImg}" 
                ${data.realStateImg ? '' : 'style="display: none;"'}
                >
                <div class="card__status" ${data.realStateStatus == "old" ? "style='display: none;' ": ''}">
                    ${data.realStateStatus}                    
                </div>
                <div class="card__real-state-agency" style="background: url('${data.realStateAgencyImg}') no-repeat;"></div>
            </div>
            <div class="card__info-container">
                <p class="card__info uploaded-time">
                    ${data.realStateUploadTime}
                </p>
                <h3 class="card__info main-title">
                    <a>
                    ${data.realStateName}
                    </a>
                </h3>
                <p class="card__info price">${this.formatCurrency(data.realStatePrice)}</p>
                <tags-comp tags='${tagsStringify}'></tags-comp>
            </div>					
        `;           
    }
}
customElements.define('realstate-card', RealStateCard);
