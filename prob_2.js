const arr = [4,2,1,7,3];

let contador = 0;

arr.reduce((a,b) =>{
  if (a>=b){
    const acumulado = a-b;
    contador += acumulado;
  }
  
  return b;
});

console.log(contador);