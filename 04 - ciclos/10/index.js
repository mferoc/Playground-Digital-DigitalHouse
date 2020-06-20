function somatoria(num) {
  var soma = 0;
  for (var i = 0; i <= num + 1; i++) {
    num = num - 1;
    soma += num;
  }
  return soma;
}
