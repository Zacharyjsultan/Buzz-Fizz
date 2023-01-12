// 1-100 displayed
// # that is evenly divisble by 3 = fizz
// # that is evenly divisable by 5 = buzz
// # evenly divisble by both 5 & 3 = fizzbuzz (make this populate)

function fizzBuzz() {
  const array = [];

  for (let i = 1; i <= 100; ++i) {
    // divisible by 15 is 3 x 5
    if (i % 15 === 0) {
      array.push("fizzbuzz");
    } else if (i % 3 === 0) {
      array.push("fizz");
    } else if (i % 5 === 0) {
      array.push("fizz");
    } else {
      array.push(i);
    }
  }
  console.log(array);
}
fizzBuzz();
//
