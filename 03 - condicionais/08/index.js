function filosofoHipster(proficao, nacionalidade, caminhada) {
  var trabalho = "Músico";
  var pais = "Brasil";
  return proficao === trabalho && nacionalidade === pais && caminhada > 2;
}

console.log(filosofoHipster("Musico", "Brasil", 5));
console.log(filosofoHipster("Musico", "Argentina", 1));
console.log(filosofoHipster("Docente", "Canada", 12));
