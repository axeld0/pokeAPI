/* fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response =>response.json())
    .catch(error=> console.log(error)) */


async function getPokemonList() {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const data = await response.json()

    for (const pokemon of data.results) {
        const pokeResponse = await fetch(pokemon.url)
        const pokeData = await pokeResponse.json()

        console.log(pokeData)
        return pokeData
    }


}




async function asyncCall() {
    try {
        let result = await getPokemonList()
        const pokeNombre = JSON.stringify(result.name)
        const id = JSON.stringify(result.id)
        const type2 = JSON.stringify(result.types[0].type.name)
        const type = buscartipos(result)
        
        function buscartipos(result){
            let tipos= []
            for(let i = 0; i < 2 ; i++ ){
                let tipo = JSON.stringify(result.types[i].type.name)
                tipos.push(tipo)
            } 
            return tipos
        }
        
    
        const imagen = result.sprites.front_default
        agregarElementos(pokeNombre, id, type, imagen)
    }
    catch (error) {
        console.log(error)
    }
}


function agregarElementos(nombre, id, type, imagen) {
    const container = document.querySelector('.container')
    const frag = document.createDocumentFragment()

    
        const item = document.createElement('p')
        item.innerHTML = " nombre: "+ nombre + "id: " + id + " Type: " + type


        const foto = document.createElement('img')
        foto.src = imagen

        frag.appendChild(foto)
        frag.appendChild(item)



    container.appendChild(frag)
}

asyncCall()


