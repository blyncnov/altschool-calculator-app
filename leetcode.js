/**
 * @param {number} num
 * @return {string}
 */

const intToRoman = function (num) {
  let mytrail = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    key;

  for (key in mytrail) {
    while (num >= mytrail[key]) {
      roman += key;
      num -= mytrail[key];
    }
  }
  return roman;
};

intToRoman();
