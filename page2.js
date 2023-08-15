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

// yeni proje : --------------------------------------------------------------------------------------------------------------------------------------------
document.write(" <br> yeni proje --------------------------------------------------");
let sayilar = [1,5,7,15,3,25];

//1- sayilar listesindeki her bir elemanın karesini yazdırınız.
let kareliSayilar = " ";
for (let i of sayilar) 
{
    kareliSayilar += (i*i) + " ";
}
document.write(`<br><br> sayılar listesindeki her bir eleman ${sayilar}  ve sırasıyla karesi : ${ kareliSayilar} `)

//2- sayılar listesindeki hangi sayılar 5'in katıdır?
    let besinKati = [];
    let k = 0;
    for(let i = 0; i <sayilar.length; i++)
    {
        if(sayilar[i] % 5 == 0)
        {
            besinKati[k] = sayilar[i];
            k++;   
        }
    }
    document.write(" <br> 5 in katı olanlar : "+ besinKati);

//3- sayılar listesindeki çift sayıların toplamını bulunuz.
let ciftToplam = 0;
sayilar.forEach((sayi, indexi) => {
    if(sayi % 2 == 0)
        ciftToplam += sayi;
});
document.write("<br> dizideki çift sayıların toplamı : " + ciftToplam);
//---------------------------
let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

//4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
document.write(`<br> elemanlar : ${urunler}  büyük harfle yazılmış halleri : `);
for(let i of  urunler)
{
    document.write(i.toUpperCase() + ", ");
}

//5- urunler listesinde içinde samsung geçen kaç ürün vardır?
let count = 0;
for (let i of urunler)
{
    if(i.includes("samsung") == true)
        count++;
}
document.write(" <br>listede içinde samsung geçen ürün sayısı : "+ count);
//--------------------------------------------------------------------------------
let ogrenciler = [
    {"Ad":"yiğit",  "Soyad":"bilgi",  "Notlar":[60,70,60]},
    {"Ad":"ada",  "Soyad":"bilgi",  "Notlar":[80,70,80]},
    {"Ad":"çınar",  "Soyad":"turan",  "Notlar":[70,70,60]},
];
// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
let notOrt_basariDrm = []
for(let i = 0; i< ogrenciler.length; i++)
{
    notOrt_basariDrm[i] = { "nameAndSurname" : (ogrenciler[i].Ad + " " + ogrenciler[i].Soyad), "gradeAverage":((ogrenciler[i].Notlar[0] + ogrenciler[i].Notlar[1] + ogrenciler[i].Notlar[2]) / 3).toFixed(1)};
}
for(let i in notOrt_basariDrm)
{
    let basari = "başarısız...";
    if(notOrt_basariDrm[i].gradeAverage>= 50)
        basari = "başarılı";
    document.write("<br>öğrenci ad-soyad : "+ notOrt_basariDrm[i].nameAndSurname + " ||||| Öğrenci not ortalaması : " + notOrt_basariDrm[i].gradeAverage + " başarı durumu : " + basari);
}
// tüm öğrencilerin not ortalaması kaçtır?
let genelOrt = 0;
for(let i in notOrt_basariDrm)
{
    genelOrt+= Number(notOrt_basariDrm[i].gradeAverage);
}
genelOrt = (genelOrt / 3).toFixed(1);
document.write("<br> tüm öğrencilerin not ortalaması : " +genelOrt);

// yeni proje : --------------------------------------------------------------------------------------------------------------------------------------------
document.write(" <br> yeni proje --------------------------------------------------");

// 1- Kendisine gönderilen kelimeyi belirten kadar ekranda yazan fonksiyon yazınız.

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

// 3- Yazı tura uygulamasını fonksiyonu kullanarak yapınız.

// 4- kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
