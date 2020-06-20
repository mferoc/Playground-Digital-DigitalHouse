function maisMenos(numeros) {
  let positivos = 0;
  let zeros = 0;
  let negativos = 0;
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) positivos += 1;
    else if (numeros[i] < 0) negativos += 1;
    else zeros += 1;
  }
  positivos = positivos / numeros.length;
  zeros = zeros / numeros.length;
  negativos = negativos / numeros.length;
  let array = [positivos, zeros, negativos];
  return array;
}
