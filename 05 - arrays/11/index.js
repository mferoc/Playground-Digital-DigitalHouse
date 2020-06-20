const posicoes = ["nada", "ouro", "prata", "bronze"];
function medalhaDeAcordoComPosto(numero) {
  if (numero >= posicoes.length) return "nada";
  return posicoes[numero];
}
