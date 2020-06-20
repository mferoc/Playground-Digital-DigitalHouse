function acontece(arrAlunos, qtdMinima) {
  var alunosPontuais = 0;
  for (var aluno of arrAlunos) {
    if (aluno <= 0) alunosPontuais++;
  }
  return alunosPontuais >= qtdMinima;
}

function aberturas(arrAlunosDias, qtdMinima) {
  var arrDiasComAulas = [];
  for (var alunosDia of arrAlunosDias) {
    arrDiasComAulas.push(acontece(alunosDia, qtdMinima));
  }
  return arrDiasComAulas;
}
