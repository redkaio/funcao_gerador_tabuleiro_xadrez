function matriz (col, lin) {
  
  let matriz = [];
  let i = 0;
  let j = 0;

  for(i = 0; i < lin; i++){
    let linha = [];
    matriz.push(linha);
    for(j = 0; j < col; j++){
      let coluna = Math.floor((Math.random() * 7));
      matriz[i].push(coluna);
    }
    }
    
  console.log(matriz);
  
}

matriz(8, 8);

