// ----------- Functions ----------- 
console.log('----------- Functions ----------- ');
//add fonksiyonun geriye number type'ında bir değer döndüreceğini belirtiriz
function add(a, b) {
    return a + b;
}
var toplam = add(10, 3);
console.log(toplam);
//bastir fonksiyonu geriye bir değer döndürmüyordur. Type'ı void'tir.
function bastir() {
    console.log('Void Function');
}
bastir();
//String bir değer döndüren fonksiyon
function birlestir(ad, soyad, yas) {
    if (yas === void 0) { yas = 18; }
    return ad + " " + soyad + " " + yas;
}
console.log(birlestir('Deniz', 'Yetişkin'));
