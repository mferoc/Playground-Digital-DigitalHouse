function caloriasDeTrote(nVoltas) {
  var caloriasDeTrote = 0;
  for (var i = 1; i < nVoltas + 1; i++) {
    caloriasDeTrote += 5 * i;
  }
  return caloriasDeTrote;
}
