// vazifa 2

let number = [1, -5, 16, 0, 2];

function nums(number) {
  let sums = 0;
  for (let x = 0; x < 5; x++) {
    if (number[x] > 0) {
      sums += number[x];
    }
  }
  return sums;
}

let a = nums(number);
console.log(a);
