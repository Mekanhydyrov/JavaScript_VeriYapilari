// Date Object
let d = new Date();
let birthday = new Date(1453, 5, 2);

// Set Methods
d.setFullYear(2022);
d.setMonth(5);
d.setDate(22);
d.setHours(15);
d.setMinutes(11);
d.setSeconds(22);




// Get Methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());


console.log(d.getFullYear() - birthday.getFullYear());

console.log(d);
console.log(typeof d);






// Tarihi ve saat bilgisini içeren bir date objesini oluşturunuz!
var dt = new Date();

console.log(dt);
console.log(dt.getMonth() + 1);
console.log(dt.getDate());
console.log(dt.getFullYear());

// Tarihi ve saat bilgisini içeren bir date objesi oluşturunuz!
var dtA = new Date('8/24/2015 16:50:15');
var dtB = new Date(2016, 7, 24, 14, 50, 10);

console.log(dtA);
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesini gösterin
var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);
console.log(dtC);


// iki tarih arasındaki geçen zamanı bulunuz
var start = new Date('1/1/1990');
var end = new Date('1/1/1991');

var millisaniye = end - start;
var saniye = millisaniye / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;


console.log('Millisaniye: ' + millisaniye);
console.log('Saniye: ' + saniye);
console.log('Dakika: ' + dakika);
console.saat('Saat: ' + saat);
console.log('Gün: ' + gun);


// Yaş Hesaplama Nasıl Yapılır!
var dogumGunu = new Date('11/5/1991');
var ageDifMs = new Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);

//console.log(dogumGunu.getTime());
//console.log(Date.now());


























// Numbers



var num = 16.52459852122117;
//Toplamda 3 basamaklı sayı kullan!
console.log(num.toPrecision(3));

// Ondalık kısmı 3 basamakta sırala
console.log(num.toFixed(3));

// En yakın sayıya Yuvarla
console.log(Math.round(num));


// aşagı yuvarla
console.log(Math.floor(num));


// Yukarı yuvarla
console.log(Math.ceil(num));


// Sayı Aralıgını kullanıcının belirleyecegi rastgele
// bir sayı üretin

var min = 500;
var max = 50000000000000;
console.log(Math.floor(min + Math.random() * (max - min)));