class TagsComp extends HTMLElement {
    constructor(){
        super()
        this.className = 'card__info tag-container';        
    }

    connectedCallback() {                    
        const tags = JSON.parse(this.getAttribute('tags'));
        this.render(tags, this)
    }

    render(tags, self) {
        let listTags = ``;
        tags && tags.map(el => {            
            listTags += `<span class="tags">${el.name}</span>` 
        });
        
        self.innerHTML = listTags;
        
    }
}
customElements.define('tags-comp', TagsComp);