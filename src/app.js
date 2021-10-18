console.log("Merhaba Kodlama.io");

// JS type safe değildir.

let dolarBugun = 9.3;
let dolarDun = 9.2;

{
  let dolarDun = 9.1;
}

console.log(dolarDun);

//array

let konutKredileri = [
  "Konut kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi a",
];

console.log("<ul>");

for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}

console.log("</ul>");

console.log(konutKredileri);
