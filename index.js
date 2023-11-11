//Array Sorulari

const dolap = ["Shirt", "Pant", "TShirt"];

////1)
//console.log(dolap.splice(2, 1));

// //2-)
// console.log(dolap.splice(0, 1, "Hat"), "silinen");
// console.log(dolap, "dolap");
// //3 -)
// const result = Array.isArray(dolap);
// console.log(result);
//

// // 4-)

// let result = dolap.find((a) => a === "Path");
// console.log(result);
// result = dolap.indexOf("Pant");
// console.log(result);
// result = dolap.includes("Pant");
// console.log(result);

// // 5-)
// const topla = (arr) =>
//   arr.map((item) => item.length).reduce((acc, cur) => acc + cur);
// console.log(topla(dolap));
// // 6-)
// const arr = dolap.map((a) => a.toUpperCase());
// const yeniDolap2 = [];
// for (let i = 0; i < dolap.length; i++) {
//   yeniDolap2.push(dolap[i].toUpperCase());
// }
// const yeniDolap3 = Array.from(dolap, (eleman) => eleman.toUpperCase());
// //7-)
// const dolapObje = dolap.map((item, key) => {
//   return {
//     key,
//     item,
//   };
// });
// 8-)
// Slice : tek arametre olursa o indexten sona kadar keser. Çift parametre olursa ilk indexten ikinciye kadar gider(HARİÇ). geriye array döner. Orjinal ARraye bir değişiklik yapmaz

//Splice - belirlnen aralıkta elemanları siler, hatta istersem oralara ekle,günceller.(geriye silineni döner). Ana arraya müdahale eder
//- tek parametre ile belirtilen indexten başlar sona akdar siler geriye  silinmiş haliyle olan gelir.
// iki parametrede beliritlen indexten başla ikinci PARAMETRE kadar (DAHİL )sil
// .splice(0,0,”bla bla”,”sdlkjfg”)    şimdi soldaki gibi kullanımda 0. indexe gider argümanları ekler  böyle istenilen indexten sonrasına ynai araya ekleme yapılabilir

const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
// // 1-)
// Çözüm 1
// const yinelenen = (arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       const item = arr[j];
//       if (item === element) result.push(element);
//     }
//   }
//   return result;
// };
// console.log(yinelenen(arr));
// // Çözüm 2
// const yinelenen = (arr) =>
//   arr.filter((element, index) => arr.indexOf(element) !== index);
// console.log(yinelenen(arr));
// //// 2-)
// //Çözüm 1
// const yeniArr = (arr) =>
//   arr.filter((element, index) => arr.indexOf(element) === index);
// console.log(yeniArr(arr));
// //Çözüm 2
// const yeniDiziSet = (arr) => {
//     const uniqueSet = new Set(arr);
//     return Array.from(uniqueSet);
//   };

/////////////////////////////////////////////
// Bu kodun çıktısı nedir neden ?
// donksiyon reject döndüğü için direkt olarak catch bloğu çalışır  ve hata yazdırılır. Sonrasında var olan then'den devam eder

// 2-)
//
// Bu kodun çıktısı nedir neden ?
/**
 * success
Defeat
error
Error caught
Success: test
 */
// Çünkü ilk then bloğunda succes yakalanır ve loga basılır,
// İkincii then bloğunda succes yakalnır ama if bloğunu geçemez ve defeat fırlatırlır
// Catch bloğu defeat'i yakalar ekrada Defeat yazar job(false çalışır)
// burada reject döneceği için yicatch rejecti yakalar yani error ifadesini loga basar ve geriye Error caught döndürür
//Sonraki then bloğunda Error caught yakalanır ve loga basılır ve hata döndürür
//sonraki blogunu bunu alır ve ekrana  Succcess: test basar
