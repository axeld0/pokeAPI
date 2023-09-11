async function getPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

getPokemon();

function agregarElemento(info, imagen){
 const conteiner = document.querySelector(".contenedor")
 const item = document.createElement("li")
 item.innerHTML=info

 const foto = document.createElement("img")
    foto.src = imagen
 item.appendChild(foto)
 conteiner.appendChild(item)
}

async function asyncCall(){
    try{
        let result = await getPokemon()
        const pokeName =JSON.stringify(result.name)
        const imagen = result.sprites.back_default
        agregarElemento(pokeName, imagen)
        
    }
    catch(error){
        console.log(error)
    }
}

asyncCall()
