// EXAMPLE 1 - Split on the Last Occurrence of a String in JavaScript

function splitLastOccurrence(str, substring) {
  const lastIndex = str.lastIndexOf(substring);

  const before = str.slice(0, lastIndex);

  const after = str.slice(lastIndex + 1);

  return [before, after];
}

const str = 'bobby#hadz#com';

const [before, after] = splitLastOccurrence(str, '#');

console.log(before); // 👉️ bobby#hadz
console.log(after); // 👉️ com

// ------------------------------------------------------------------

// // EXAMPLE 2 - The substring might not be contained in the string

// function splitLastOccurrence(str, substring) {
//   const lastIndex = str.lastIndexOf(substring);

//   let before = '';
//   let after = '';

//   if (lastIndex !== -1) {
//     before = str.slice(0, lastIndex);
//     after = str.slice(lastIndex + 1);
//   }

//   return [before, after];
// }

// const str = 'bobby-hadz-com';
// const substring = '#';

// const [before, after] = splitLastOccurrence(str, substring);
// console.dir(before); // 👉️ ''
// console.dir(after); // 👉️ ''

// ------------------------------------------------------------------

// // EXAMPLE 3 - Split on the Last Occurrence of a String using `split()`

// function splitLastOccurrence(str, substring) {
//   const arr = str.split(substring);

//   const after = arr.pop();

//   const before = arr.join(substring);

//   return [before, after];
// }

// const str = 'bobby#hadz#com';

// const [before, after] = splitLastOccurrence(str, '#');

// console.log(before); // 👉️ bobby#hadz
// console.log(after); // 👉️ com
