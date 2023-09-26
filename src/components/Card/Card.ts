const agentFetch: Promise<Response> = fetch('https://valorant-api.com/v1/agents');

agentFetch
    .then((res: Response) => {
        return res.json();
    })
    .then((data: { name: string }) => {
        console.log(data);
    })
    .catch((error: Error) => console.log(error));

class Card extends HTMLElement{

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
            `
            console.log("mamaguevo2");
        }}

}

customElements.define("card-element", Card)
export default Card;