export enum Attribute {
    name = "name"
}

class Card extends HTMLElement {
    name?: string;
    agentData: any[] = [];

    static get observedAttributes() {
        return [Attribute.name];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        this.name = this.getAttribute(Attribute.name) || "";

        try {
            const response = await fetch('https://valorant-api.com/v1/agents');
            const data = await response.json();
            this.agentData = data.data;
            this.render();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        if (this.shadowRoot) {
            if (this.agentData.length > 0) {
                const firstAgent = this.agentData[0];
                this.shadowRoot.innerHTML = `
                    <h1>${firstAgent.displayName}</h1>
                    <p>${firstAgent.description}</p>
                `;
            } else {
                this.shadowRoot.innerHTML = '<p>No agent data available</p>';
            }
        }
    }
}

customElements.define("card-element", Card);
export default Card;