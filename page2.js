//1  "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
//2  Dizi kaç elemanlıdır?
//3  Dizinin ilk ve son elemanı nedir?
//4  Elma dizinin bir elemanımıdır?
//5  Kiraz meyvesini listenin sonuna ekleyiniz.
//6  Dizinin son 2 elemanını siliniz.
//7  Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını hesaplayınız.
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
dizi.push(["Ahmet", "Turan", 2009, [60,60,70]])
document.write(`<br>${dizi[3][0]} adlı öğrencinin yaşı : ${2023 - dizi[3][2]}`);
document.write(`<br>${dizi[4][0]} adlı öğrencinin yaşı : ${2023 - dizi[4][2]}`);
document.write(`<br>${dizi[5][0]} adlı öğrencinin yaşı : ${2023 - dizi[5][2]}`);