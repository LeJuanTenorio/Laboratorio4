class Card extends HTMLElement {
    name?: string;
    agentData: any[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        try {
            const response = await fetch('https://valorant-api.com/v1/agents');
            const data = await response.json();
            this.agentData = data.data;
            console.log(this.agentData);
            this.render(); 
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        if (this.shadowRoot) {
            const container = document.createElement('div');
            container.className = 'container';
            if (this.agentData.length > 0) {
                this.agentData.forEach((agent) => {
                    const agentElement = document.createElement('div');
                    agentElement.className = 'agent-card';
                    agentElement.innerHTML = `
                        <h1>${agent.displayName}</h1>
                        <p>${agent.description}</p>
                        <img src="${agent.fullPortrait}">
                    `;
                    container.appendChild(agentElement);
                });
            } else {
                container.innerHTML = '<p>No agent data available</p>';
            }
            this.shadowRoot.innerHTML = '';
            this.shadowRoot.appendChild(container);
        }
    }
}

customElements.define("card-element", Card);

export default Card;
