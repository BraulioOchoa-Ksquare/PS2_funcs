const findNum = (limite, arrayNumbers) =>{
  let i = 1;
  for (i; i<limite; i++){
    const existe = arrayNumbers.some(a => a===i);
    if(!existe) return i;
  }
  return false;
}

console.log(findNum(7,[1,2,3,4,5]));
