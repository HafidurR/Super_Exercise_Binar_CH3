function toRoman(numb) {
  if (typeof numb !== 'number' || numb < 0) {
    return 'Data tidak valid'
  }
  let desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romawi =['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let hasil = '';

  for (let i = 0; i < desimal.length; i++) {
    while (desimal[i] <= numb) {
      hasil += romawi[i];
      numb -= desimal[i];
    }
  }
  return hasil;
}
console.log(toRoman(-6));