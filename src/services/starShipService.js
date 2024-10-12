const BASE_URL = 'https://swapi.dev/api/starships'

const getAll = async() =>{
    try{
        const list = await fetch(BASE_URL);
        const data = await list.json();
        console.log('data', data);
        return data;
    }catch (err) {
        console.log(err)
    }

}

export {getAll}