function esperar3seg(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos obtenidos 3 seg");
    }, 3000);
  });
};

function esperar2seg(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos obtenidos 2 seg");
    }, 2000);
  });
};

var secuencialStart = async function() {
  const slow = esperar2seg();
  console.log(await slow);

  console.log('en medio');

  const fast = esperar3seg();
  console.log(await fast);

  //total espera 5 seg
}

//secuencialStart();

var concurrentStart = async function() {
  const slow = esperar2seg();
  const fast = esperar3seg();
  
  console.log(await slow);
  console.log('en medio');
  console.log(await fast);

  //total espera 3 seg, la mas lenta
}

concurrentStart();