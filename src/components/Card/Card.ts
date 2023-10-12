const fetchFunction = async (data:any) => {
    try{
        const response = await fetch(data);
        const jsonJimenez = await response.json();
        return jsonJimenez;
    }
    catch (error) {
        console.error(error);
    }
}

class Card extends HTMLElement {
    name?: string;
    agentData: any[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
            const data = await fetchFunction('https://valorant-api.com/v1/agents')
            this.agentData = data.data;
            console.log(this.agentData);
            this.render(); 
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
                        <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Staatliches&display=swap');

                        .name{
                            color: white;
                            font-family: 'Roboto', sans-serif;
                            text-transform: uppercase;
                            font-weight: 900;
                            font-size: 9vw;
                            align-items: center;
                            margin:0px;
                            padding:0px;
                        }

                        p{
                            color: white;
                            font-family: 'Roboto', sans-serif;
                            font-weight: 600;
                            font-size: 3vw;
                            padding-right: 5vw;
                            padding-left: 1vw;
                        }
                        
                        img {
                            position: absolute;
                            width: 50vw;
                            height: auto;
                            top: 0;
                            left: 30%;
                            transform: translateX(-50%);
                            z-index: 1;
                        }
                        
                        .title{
                            width:500vw;
                            display: flex;
                            flex-direction: column;
                            text-align: center;
                            justify-content: center; 
                            align-items: center;   
                        }

                        .agent-card {
                            position: relative;
                            width: 100vw;
                            height: 100vh;
                            padding-top: 0px;
                            padding-bottom: 10vh;
                        }
                        
                        .text{
                            display: flex;
                            flex-direction: row;
                            width: 100vw;
                            height: auto;
                        }
                        </style>

                        

                        <div class="text">
                        <div class="title">
                        <h1 class="name">${agent.displayName}</h1>
                        <h1 class="name">${agent.displayName}</h1>
                        <h1 class="name">${agent.displayName}</h1>
                        </div class="title">
                        <p>${agent.description}</p>
                        </div>

                        <img src="${agent.fullPortrait}">
                    `;
                    container.appendChild(agentElement);
                });
            } else {
                container.innerHTML = '<p>No agent data available</p>';
            }

            this.shadowRoot.appendChild(container);
        }
    }
}

customElements.define("card-element", Card);

export default Card;
