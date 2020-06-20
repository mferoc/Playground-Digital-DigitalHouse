function eNumeroDaSorte(n) {
  return n > 0 && (n % 2 == 0 || n % 3 == 0) && n != 15;
}
