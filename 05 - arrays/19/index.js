function saldoDeMesesComLucro(umPeriodo) {
  let periodos = [];
  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0) periodos.push(umPeriodo[mes]);
  }
  return periodos;
}
