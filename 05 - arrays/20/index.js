function naipeDeTruco(naipe) {
  var resultado = [];
  for (var i = 1; i <= 12; i++) {
    if (i == 8) {
      i += 1;
    } else {
      resultado.push(i + " de " + naipe);
    }
  }
  return resultado;
}
