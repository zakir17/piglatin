const vowelA = "a";
const vowelE = "e";
const vowelI = "i";
const vowelO = "o";
const vowelU = "u";

// const translate = (word) => {
//   word = word.toLowerCase();
//   if (
//     word[0] === vowelA ||
//     word[0] === vowelE ||
//     word[0] === vowelI ||
//     word[0] === vowelO ||
//     word[0] === vowelU
//   ) {
//     return `${word}way`;
//   } else {
//     if (
//       word[1] === vowelA ||
//       word[1] === vowelE ||
//       word[1] === vowelI ||
//       word[1] === vowelO ||
//       word[1] === vowelU
//     ) {
//       let newWord = "";
//       for (let i = 1; i < word.length; i++) {
//         newWord += word[i];
//       }
//       return `${newWord}${word[0]}ay`;
//     }
//   }
// };

// module.exports = { translate };

const translate = (word) => {
  if (
    word[0] === vowelA ||
    word[0] === vowelE ||
    word[0] === vowelI ||
    word[0] === vowelO ||
    word[0] === vowelU
  ) {
    return `${word}way`;
  } else {
    let ending = "";
    let start = "";
    let i = 0;
    while (i < word.length) {
      console.log(i);
      if (
        word[i] === vowelA ||
        word[i] === vowelE ||
        word[i] === vowelI ||
        word[i] === vowelO ||
        word[i] === vowelU
      ) {
        start += word[i];
        i++;
        console.log(start);
      } else {
        ending += word[i];
        i++;
        console.log(ending);
      }
      return start + ending + "way";
    }
  }
};
translate("may");
