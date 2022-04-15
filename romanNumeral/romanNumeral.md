# `Logic Challenge - Roman Numeral`

`Roman Numeral` adalah sistem penomoran pada masa Ancient Rome. Kita akan melakukan pengubahan `Angka Umum` yang banyak digunakan sekarang menjadi `Roman Numeral`.

---

## DIRECTIONS

- Pada umumnya terdapat 7 simbol utama yang menggambarkan berbagai jenis nilai, diantaranya:
    - `I` sama dengan angka `1`
    - `V` sama dengan angka `5`
    - `X` sama dengan angka `10`
    - `L` sama dengan angka `50`
    - `C` sama dengan angka `100`
    - `D` sama dengan angka `500`
    - `M` sama dengan angka `1000`

- Buatlah sebuah fungsi bernama `toRoman` yang menerima 1 parameter berupa `number`.
- Gunakanlah informasi diatas untuk proses analisis Anda menyelesaikan program yang akan dibangun.

---

## RESTRICTION

- Tidak boleh menggunakan built-in function apapun.
- Parameter `number` bernilai positif.
---

## Objectives

- Mampu memecahkan masalah yang diberikan
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah

---

## Clues

- Anda dapat menggunakan `recursive` style dalam menyelesaikan masalah ini.
- Clue tidak wajib untuk Anda ikuti. Bila memiliki cara tersendiri, silahkan.

```js
// Drive code
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("——————|——————————|———————");
console.log("4     | IV       | ", toRoman(4));
console.log("9     | IX       | ", toRoman(9));
console.log("13    | XIII     | ", toRoman(13));
console.log("1453  | MCDLIII  | ", toRoman(1453));
console.log("1646  | MDCXLVI  | ", toRoman(1646));
```


