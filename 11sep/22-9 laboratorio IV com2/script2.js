// function PedidoAPI() {
//     return new Promise( (resolve,reject) => {
//       const data = null;
  
//       const xhr = new XMLHttpRequest(); //1
//       xhr.withCredentials = true;

//       // xhr.open('GET', 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'); //2
//       // xhr.setRequestHeader('accept', 'application/json'); //3
//       // xhr.setRequestHeader('X-RapidAPI-Key', '67ce9a7bddmsheb5e568c085e441p16581cjsndd627b02a361');
//       // xhr.setRequestHeader('X-RapidAPI-Host', 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com');
  
      

//       xhr.onload = function() { //4'
//         if (xhr.status == 200) {
//           console.log('respuesta del servidor o API');
//           console.log(this.response);
//           let data = JSON.parse(this.response);
//           resolve(data);
//         }else{
//           reject(new Error('error en la conexion'));
//         }
//       };
  
//       xhr.send(data); //5
//     });
//   }

//   fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {headers:{
//       'accept': 'application/json', 'X-RapidAPI-Key': '67ce9a7bddmsheb5e568c085e441p16581cjsndd627b02a361'
//       , 'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
//       }})
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
    
//  async function asyncCall() {
//    console.log('calling');
//    try{ 
//        let result = await fetch();
//        const datos = await result.json()
//        console.log('respuesta JSON');
//        console.log(datos);
//        console.log('joke');
//        //console.log(result.value); sacar para wwel no return
//        //aca llamaria a la funcion de agregar elementos
//        //document.getElementById('chuck').innerHTML = result.value;
//        console.log(result.value);
//        agregarElementos(result.value);
//    }catch(error){
//      console.log(error);
//    };
//  }

//  function agregarElementos(info){
//    //seleccionamos y creamos el elemento contenedor 'div' para agregar los elementos
//    const contenedor = document.querySelector(".contenedor");
//    //agregamos el fragmento al contenedor para minimizar las operaciones del DOM
//    const fragmento = document.createDocumentFragment();

   
//    for(let i=0; i<5; i++){
//      //creamos un nodo elemento
//      const item = document.createElement("li");
//      //a item le colocamos la info de la variable info
//      item.innerHTML = info;
//      //le agregamos un elemento hijo al div, que sera en este caso un li
//      fragmento.appendChild(item);
//    }
//    //le agregamos el fragmento al item contenedor
//    contenedor.appendChild(fragmento);
//  }
  
//  setInterval(asyncCall,5000);
//  asyncCall();




    //mucho mas simple y nuevo que XML
    //como parametro le mandas el link de la Api
   fetch('https://rickandmortyapi.com/api/episode')
      //en response se guarda la respuesta del json
     .then(response => response.json())
     //se muestra los datos del json en consola
     .then(data => console.log(data))
     //en caso de que haya un error, se lee por consola el error
     .catch(error => console.log(error))


  async function asyncCall() {
    console.log('calling');
    try{ 
        let result = await fetch('https://rickandmortyapi.com/api/episode');
        const datos = await result.json()
        console.log('respuesta JSON');
        //console.log(datos);
        console.log('joke');
        //console.log(result.value); sacar para wwel no return
        //aca llamaria a la funcion de agregar elementos
        //document.getElementById('chuck').innerHTML = result.value;
        agregarElementos(datos);
    }catch(error){
      console.log(error);
    };
  }

  function agregarElementos(info){
    //seleccionamos y creamos el elemento contenedor 'div' para agregar los elementos
    const contenedor = document.querySelector(".contenedor");
    //agregamos el fragmento al contenedor para minimizar las operaciones del DOM
    const fragmento = document.createDocumentFragment();

   
    // for(let i=0; i<info.length; i++){
    //   //creamos un nodo elemento
      
    // }

    
    info.results.forEach((e)=>{
      const item = document.createElement("li");
      //a item le colocamos la info de la variable info
      item.innerHTML = e.name + " " + e.id;

      //le agregamos un elemento hijo al div, que sera en este caso un li
      fragmento.appendChild(item);
    })
    //le agregamos el fragmento al item contenedor
    contenedor.appendChild(fragmento);
  }
  
  //setInterval(asyncCall,5000);
  asyncCall();








/*
async function llamada(){
  await asyncCall();
}
//llamada();
*/



