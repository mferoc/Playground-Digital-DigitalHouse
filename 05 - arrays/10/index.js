function contem(arr, val) {
  return arr.indexOf(val) !== -1 ? true : false;
}
let a = []; //array vazio
//a.indexOf(0);
console.log(contem(a, 0));
let ar = ["a", "b"]; //array 2 elems
console.log(contem(ar, 48));
