import { Card } from "./components/indexExport";
import "./components/indexExport";

class AppContainer extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            
            <card-element></card-element>
            
            `
        }
    }
}

customElements.define("app-container", AppContainer);
console.log("mamaguevo");