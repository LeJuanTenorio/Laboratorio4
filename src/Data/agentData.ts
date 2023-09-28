const agentFetch: Promise<Response> = fetch('https://valorant-api.com/v1/agents');

agentFetch
    .then((res: Response) => {
        return res.json();
    })
    .then((data: { name: string }) => {
        console.log(data);
    })
    .catch((error: Error) => console.log(error));
