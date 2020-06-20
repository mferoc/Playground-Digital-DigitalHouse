function arraysIguais(a, ar) {
  return a === ar;
}

const pessoas = ["jsd", "lskjdf", "sdkjlnf"];
console.log(arraysIguais(["olá", "mundo"], ["mundo", "olá"]));
console.log(arraysIguais(["olá", "mundo"], ["olá", "mundo"]));
console.log(arraysIguais(["olá", "mundo"], ["olá", "todo", "o", "mundo"]));
console.log(arraysIguais(["olá"], ["olá", "mundo"]));
console.log(["olá", "mundo"] === ["mundo", "olá"]);
console.log(pessoas);
console.log(["mara", "juliana"] === pessoas);
console.log(pessoas === pessoas);
