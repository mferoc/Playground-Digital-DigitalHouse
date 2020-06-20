function possoIrAoBanco(diaDaSemana, horaAtual) {
  const diasFuncionamentoBanco = [
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
  ];
  const diaDeFuncionamento = diasFuncionamentoBanco.indexOf(diaDaSemana) !== -1;
  const horarioDeFuncionamento = horaAtual >= 9 && horaAtual <= 15;
  return diaDeFuncionamento && horarioDeFuncionamento;
}
