const agentFetch: Promise<Response> = fetch('https://valorant-api.com/v1/agents');

let agentData: Array<any> = [] ; 

agentFetch
    .then((res: Response) => {
        return res.json();
    })
    .then((data) => {
        console.log(data.data[0].displayName);
        agentData.push(data);
        agentData = data.name;
    })
    .catch((error: Error) => console.log(error));

export enum Attribute{
    name = "name"
}

class Card extends HTMLElement{

    name?: String;

    static getObservedattributes(){
        return [Attribute.name]
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.name = this.getAttribute(Attribute.name) || "";

        this.render();
    }

    render(){
        if(this.shadowRoot){
            console.log(agentData);
            this.shadowRoot.innerHTML = `
            `
        }}

}

customElements.define("card-element", Card)
export default Card;