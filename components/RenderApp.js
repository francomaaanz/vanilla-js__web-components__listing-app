
export default class RenderApp {
	constructor() {
		super();		
		let div = document.createElement('div')
		div.innerHTML = `<listing-page></listing-page>`;
		doc.querySelector('body').appendChild(div);		
	}					
}
