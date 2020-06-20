function escada(numeroDegraus) {
  let degrausEscada = [];
  for (let i = 1; i <= numeroDegraus; i++) {
    let degraus = " ".repeat(numeroDegraus - i) + "#".repeat(i);
    degrausEscada.push(degraus);
  }
  return degrausEscada;
}
