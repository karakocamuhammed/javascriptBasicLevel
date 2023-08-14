//1  "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
//2  Dizi kaç elemanlıdır?
//3  Dizinin ilk ve son elemanı nedir?
//4  Elma dizinin bir elemanımıdır?
//5  Kiraz meyvesini listenin sonuna ekleyiniz.
//6  Dizinin son 2 elemanını siliniz.
//7  Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
    öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
    öğrenci 2: Ada Bilgi 2012   (80,80,90)
    öğrenci 3: Ahmet Turan 2009 (60,60,70)
*/
var dizi = ["Elma","Armut","Muz","Çilek"];
document.writeln("dizinin eleman sayısı : "+dizi.length)
document.write(` <br> dizinin ilk elemanı : ${dizi[0]}  --------  dizinin son elemanı : ${dizi[dizi.length -1]}`);
document.write("<br> elma dizinin bir elemanımıdır ? : "+ (dizi.includes("Elma") ? "evet elemanıdır..." : "hayır elemanı değildir.." ));
dizi.push("Kiraz")
document.write("<br>dizinin yeni son elemanı : "+ dizi[dizi.length - 1])
dizi.splice(-2)
document.write("<br>güncel dizinin son 2 elemanı : "+dizi[dizi.length -1] + ", " + dizi[dizi.length -2])
dizi.push(["yiğit", "Bilgi", 2010, [70,60,80]]);
dizi.push(["Ada", "Bilgi", 2012, [80,80,90]]);
dizi.push(["Ahmet", "Turan", 2009, [60,60,70]])/*
function notortalamasi(one,two,three) 
    {
        return ((one + two + three) / 3);
    }*/
document.write(`<br>${dizi[3][0]} adlı öğrencinin yaşı : ${new Date().getFullYear() - dizi[3][2]}  ve not ortalaması : ${((dizi[3][3][0] + dizi[3][3][1] + dizi[3][3][2]) / 3).toFixed(1)}`);
document.write(`<br>${dizi[4][0]} adlı öğrencinin yaşı : ${new Date().getFullYear() - dizi[4][2]}  ve not ortalaması : ${((dizi[4][3][0] + dizi[4][3][1] + dizi[4][3][2]) / 3).toFixed(1)}`);
document.write(`<br>${dizi[5][0]} adlı öğrencinin yaşı : ${new Date().getFullYear() - dizi[5][2]}  ve not ortalaması : ${((dizi[5][3][0] + dizi[5][3][1] + dizi[5][3][2]) / 3).toFixed(1)}`);

// yeni proje : 
let sayilar = [1,5,7,15,3,25];

//1- sayilar listesindeki her bir elemanın karesini yazdırınız.

//2- sayılar listesindeki hangi sayılar 5'in katıdır?

//3- sayılar listesindeki çift sayıların toplamını bulunuz.

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

//4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

//5- urunler listesinde içinde samsung geçen kaç ürün vardır?

let ogrenciler = [
    {"Ad":"yiğit",  "Soyad":"bilgi",  "Notlar":[60,70,60]},
    {"Ad":"ada",  "Soyad":"bilgi",  "Notlar":[80,70,80]},
    {"Ad":"çınar",  "Soyad":"turan",  "Notlar":[70,70,60]},
];
// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

// tüm öğrencilerin not ortalaması kaçtır?