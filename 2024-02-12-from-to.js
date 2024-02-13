// Specs
let range = fromTo(0, 3);

console.log(range()); // 0
console.log(range()); // 1
console.log(range()); // 2
console.log(range()); // null
// All subsequent function calls will be null as the generator is finished

// Solution
function fromTo(start, end) {
  const gen = generator();

  // The returned "range" function calling the next function of the generator
  return function () {
    const { value } = gen.next();
    if (typeof value == "undefined") return null;
    return value;
  };

  // The generator function
  function* generator() {
    while (start < end) {
      yield start++;
    }
  }
}

// With the iterator interface but no generators
// function fromTo(start, end) {
//   const iterator = {
//     next: function () {
//       if (start < end) {
//         return { done: false, value: start++ };
//       }
//       return { done: true, value: null };
//     },
//   };

//   return function () {
//     const { value } = iterator.next();
//     return value;
//   };
// }

// Non generator solution
// function fromTo(start, end) {
//   return function () {
//     if (start < end) {
//       return start++;
//     }
//     return null;
//   };
// }
