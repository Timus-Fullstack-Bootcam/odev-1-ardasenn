# Assignment 1

##### 1- JavaScript nedir ve tarihsel gelişiminden bahsedin

- Web sitelerine dinamik ve kullanıcı etkileşimi eklemek için tasarlanmıştır. Yani client işlemleri yapmak için...
- 2 önemli kırılma noktası olduğu söylenebilir. Bunlardan ilki AJAX ve Web 2.0 dönemi ki asenkron işlemlerin öne çıktığı zamandır. İkinci ise Ecma Script 2016 versiyonu ile esas sıçramayı yaptı diyebiliriz.
- 1995 yılında Brendan Eich tarafından ortaya atılmış hatta ismi başlarda LineScriptmiş sonralarında günümüzdekine adına erişmiştir.

##### 2- Java ile javascript arasındaki fark nedir

- İkisi bambaşka dillerdir. Java sadece server side tarafında çalışır , JS ise direkt olarak serverde çalışmasada yardımcı bir engine (v8) ile hem serverda hem de clientta çalışır
- Java da fonksiyonel programlama yapılmaz.

##### 3 Javascript teki veri tipleri nelerdir açıklayınız

- Primitive ve Kompleks veri tipleri
- Primitive veri tipleri
  | Primitive | Kompleks 2
  | -------- | ------- |
  | String | Object |
  | Number | Array |
  | Boolen | Function |
  | BigInt | |
- Ayrıca Primitive degisken olarka kabul gorulen undefined, null Symbol tipleride vardır. Tabloda ençok kullanılanları eklemek istedim

##### 4 null ile undefined arasıdaki fark nedir açıklayınız

- Undefined bir değişkenin değerini atanmamış tanımlanmamış olduğu durumdur.Bir değişken vardır ama değeri yoktur
- Null ise değişkenin varlığına işaret eder.

##### 5 NaN nedir açıklayınız

- Matematiksel hataları ifade eder. Açılımı Not a Number'dır.
- 0/0 hatası gibi durumlar için atanır

##### 6 Javascript’te yorum satırı eklemenin kaç farklı yolu vardır

- İki farklı yöntem vardır.
- // karakterleri ile ilgili satır yorum satırı olmuş olur
- /\* \*/ bu karakterler arasına yazılan metinler yorum satıır olarak işlem görür. Çok satırlık metinlerde bunu tercih ederiz

##### 7 Global değişken ne demektir açıklayınız

- İlgili js kodu içerisinde her yerden her zaman erişebilen , kullanılan değişkendir diyebilirim. Yani fonksiyon skopta ve dışında geçerlidir
- Her yerden erişilmesi başta anlamlı gelebilir ama ben kodlarım kullanmıyorum. Güncel projelerde de daha çok let ve const ile blok scope değişkenler ile hayatımıza devam ediyoruz

##### 8 Javascript’te this anahtar kelimesi nedir açıklayınız

- Bu keyword bize hangi nesnenin içindeişlev gördüğünü verir.
- Mesela tarayıcıda çalışan bir js uygulamasında this bize window verir.
- Nesne içinde çalışan bir this o nesneyi verir

##### 9 == ile === farkını örnekler ile açıklayınız

- == Önce tipleri birbirne eşitler ondan sonra bu değerlere bakar eşit mi diye Örn: "1"==1 true döner
- === Değer ve tip kontrolü yapar. Aslında bellekte aynı yerdeler mi diye bakar Örn: "1"===1 false döner

##### 10 let var const farkını tablo yapınız

| Kavram  | Kapsam (Scope) | Tekrar Tanımlama | Değiştirilebilirlik | İlk Değer Atama |
| ------- | -------------- | ---------------- | ------------------- | --------------- |
| `let`   | Blok           | İzin verir       | İzin verir          | İsteğe bağlı    |
| `var`   | Global         | İzin verir       | İzin verir          | `undefined`     |
| `const` | Blok           | İzin vermez      | İzin vermez         | Zorunlu         |

##### 11 Arrow fonksiyonun normal fonksiyondan farkları nelerdir

- This keywordunu kullanırken Arrow Function miras alırken Function kendi this bağlamını oluşturur.
- Arrow functionlar contructor olarak kullanılamaz

##### 12 swich bloğu içinde hatasız nasıl değişken tanımlanır

- Soruyu tam olarak algılyamadım ama switch dışarısında let ile değişken tanımlarım ve ilgili case durumlarında değişiklik yapabilirim

##### 13 Pure fonksiyon ne demektir açıklayınız

- Rastgeleliğin olmadığı aynı girdiler ile aynı çıktıların üretildiği fonksiyonlardır
- Yan etkileri yoktur.

##### 14 Rest operatör nedir örnekle açıklayınız

- Fonksiyon tanımlarken parametrede kullanılan ... nokta Rest olarak tanımlanır
- Gönderilecek bütün argümanların tek bir array'da toplanılacağını belirtir. Ve daima parametre sırası olarak sonda olmalıdır

##### 15 Object destructuring nedir örnekle açıklayınız

- Mesela bir nesnemiz ve bu nesnenin propertyleri olsun.
- Biz bu yöntem ile istediğimiz nesnenin sahip olduğu istediğimiz property'yi veya fonksiyonu atayabiliyor.
- Aşağıdaki örnekte yas değişkeni destructing ile atanmıştır ve değeri 27'dir

```javascript
const arda = { yas: 27, arac: "fabia" };
const { yas } = arda;
```

##### 16 2 elemanlı bir objeyi 6 farklı şekilde oluşturunuz

```javascript
const obj1 = { key1: "value1", key2: "value2" };
```

```javascript
const key1 = "value1";
const key2 = "value2";
const obj2 = { key1, key2 };
```

```javascript
const obj3 = {};
obj3.key1 = "value1";
obj3.key2 = "value2";
```

```javascript
const obj4 = new Object();
obj4.key1 = "value1";
obj4.key2 = "value2";
```

```javascript
const obj5 = Object.create(null);
obj5.key1 = "value1";
obj5.key2 = "value2";
```

```javascript
const obj6 = Object.assign({}, { key1: "value1", key2: "value2" });
```

##### 17 2 elemanlı bir objenin key ve value değerlerinin karakter sayısı ile 2 farklı döngü methodu kullanarak yeni bir obje oluşturunuz

```javascript
const originalObject = {
  key1: "value1",
  key2: "value22",
};

const newObject1 = {};

for (const key in originalObject) {
  const value = originalObject[key];
  const charCount = value.length;
  newObject1[key] = charCount;
}

console.log(newObject1); // { key1: 6, key2: 7 }
```

```javascript
const originalObject = {
  key1: "value1",
  key2: "value22",
};

const newObject2 = {};

Object.keys(originalObject).forEach((key) => {
  const value = originalObject[key];
  const charCount = value.length;
  newObject2[key] = charCount;
});

console.log(newObject2); // { key1: 6, key2: 7 }
```

##### 18 Cookie, local storage ve session storage farkını tablo yapınız

| Özellik                  | Cookie                                                                   | Local Storage                                        | Session Storage                                      |
| ------------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------- | ---------------------------------------------------- |
| Depolama Yeri            | Tarayıcıda saklanır.                                                     | Tarayıcıda saklanır.                                 | Tarayıcıda saklanır.                                 |
| Depolama Kapasitesi      | Genellikle 4 KB'ye kadar veri depolanır.                                 | Genellikle 5-10 MB'ye kadar veri depolanır.          | Genellikle 5-10 MB'ye kadar veri depolanır.          |
| Taraf (Client/Server)    | Hem sunucu hem istemci tarafından erişilebilir.                          | Yalnızca istemci tarafından erişilebilir.            | Yalnızca istemci tarafından erişilebilir.            |
| Süreklilik (Persistence) | Ayarlandığı sürece kalıcıdır.                                            | Oturum süresi boyunca kalıcıdır.                     | Sayfa oturumu boyunca kalıcıdır.                     |
| Veri Türleri             | Yalnızca metin (string) verileri depolar.                                | String, sayı, JSON, vb. her türlü veriyi depolar.    | String, sayı, JSON, vb. her türlü veriyi depolar.    |
| Otomatik Gönderme        | Tarayıcı her HTTP isteği ile cookie'yi sunucuya gönderir.                | Otomatik gönderme yok.                               | Otomatik gönderme yok.                               |
| Kullanım Alanı (Scope)   | Siteye veya belirli yollara özgüdür.                                     | Tarayıcı ve sekme özgüdür.                           | Sekme özgüdür.                                       |
| Güvenlik                 | Güvenlik zayıftır ve veri kötü niyetli kullanımlara karşı savunmasızdır. | Daha güvenlidir ve veri diğer sitelerle paylaşılmaz. | Daha güvenlidir ve veri diğer sitelerle paylaşılmaz. |

##### 19 asenkron ve senkron işlem farkı nedir

- Senkron işlemler güncel bir threadi duraklatır bekler cevap bekler.
- ASenkron işlemler için ayrı bir işlem yapılır. JS ama single thread olduğu için burada event loop kavramı vardır.

##### 20 promise nedir ve neden ihtiyaç duyarız

- Js'te asenkron işlemleri daha iyi yönetmek için kullanılan bir nesnedir.
- Promise'in olası 3 durumu vardır.
- Pending , Fullfilled , reject
- Pending durumu cevabın beklenildiği durumdur
- Fullfilled ise işlemin başarılı olduğu durumdur. Buradan dataya erişilebilir
- Reject ise başarısız işlemi ifade eder. Geriye hata döndüğü durumdur

---

<span style="float:right; font-weight:bold;">Hazırlayan : Arda Şen</span>
