function produto(numeros) {
  let multiplicacao = 1;
  for (let i = 0; i < numeros.length; i++) multiplicacao *= numeros[i];
  return multiplicacao;
}
