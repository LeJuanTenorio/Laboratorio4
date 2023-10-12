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