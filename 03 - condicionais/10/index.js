function podeSeAposentar(idade, sexo, anosTrabalhados) {
  return anosTrabalhados >= 40 && idade >= (sexo === "F" ? 60 : 65);
}
