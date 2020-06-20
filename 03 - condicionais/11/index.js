function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco) {
  return (
    (!temProblemaCardiaco && alturaPessoa >= 1.5) ||
    (alturaPessoa >= 1.2 && vemComCompania)
  );
}
