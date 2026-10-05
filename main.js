/*

let dizi = [1, 2, 3, 4, 5];
dizi.push(6);

for (let i = 0; i < dizi.length; i++) {
    console.log(dizi[i]);
}

console.log(dizi);
*/


// const { version } = require("react")

// let users = [
//     memoli = {
//         name: "memoli",
//         surename: "temizaltın",
//         age: 25,
//         adress: {
//             city: "istanbul",
//             country: "turkey",
//             state: "dedebayır",
//             street: "kalemiye"
//         }

//     },
//     selim = {
//         name: "selim",
//         surename: "yılmaz",
//         age: 30,
//         adress: {
//             city: "ankara",
//             country: "turkey",
//             state: "dedebayır",
//             street: "kalemiye"
//         }

//     },
//     emrah = {
//         name: "emrah",
//         surename: "yıldız",
//         age: 35,
//         adress: {
//             city: "gümüşhane",
//             country: "turkey",
//             state: "dedebayır",
//             street: "kalemiye"
//         }

//     }

// ]


// let tablo = `
//     <tr>
//                 <th id="isim">İsim</th>
//                 <th id="soyisim">Soyisim</th>
//                 <th id="yas">Yaş</th>
//                 <th id="adres">Adres</th>
//      </tr>

//     <tr>
//         <td>${users[0].name}</td>
//         <td>${users[0].surename}</td>
//         <td>${users[0].age}</td>
//         <td>${users[0].adress.country}</td>
//     </tr>
//     <tr>
//         <td>${users[1].name}</td>
//         <td>${users[1].surename}</td>
//         <td>${users[1].age}</td>
//         <td>${users[1].adress.country}</td>
//     </tr>
//     <tr>
//         <td>${users[2].name}</td>
//         <td>${users[2].surename}</td>
//         <td>${users[2].age}</td>
//         <td>${users[2].adress.country}</td>
//     </tr>

// `;

// document.getElementById("tablo").innerHTML = tablo;



// let users = [
//     memoli = {
//         name: "memoli",
//         surename: "temizaltın",
//         age: 25,
//         adress: {
//             city: "istanbul",
//             country: "turkey",
//             state: "dedebayır",
//             street: "kalemiye"
//         }

//     },
//     selim = {
//         name: "selim",
//         surename: "yılmaz",
//         age: 30,
//         adress: {
//             city: "ankara",
//             country: "german",
//             state: "dedebayır",
//             street: "kalemiye"
//         }

//     },
//     emrah = {
//         name: "emrah",
//         surename: "yıldız",
//         age: 35,
//         adress: {
//             city: "gümüşhane",
//             country: "turkey",
//             state: "dedebayır",
//             street: "kalemiye"
//         }

//     },
//     selami = {
//         name: "emrah",
//         surename: "yıldız",
//         age: 35,
//         adress: {
//             city: "gümüşhane",
//             country: "ABD",
//             state: "dedebayır",
//             street: "kalemiye"
//         }

//     }

// ]


// let filter = users.filter(function (user) {
//     if (user.adress.country !== "turkey") {
//         return user;
//     }
// });
// console.log(filter)



// let isim = document.getElementById("isim").innerHTML = users[0].name;
// let soyisim = document.getElementById("soyisim").innerHTML = users[0].surename;
// let yas = document.getElementById("yas").innerHTML = users[0].age;
// let adres = document.getElementById("adres").innerHTML = users[0].adress.country;

// let yeniDizi = users.map(function (user) {

//     return user.name + " bey"

// })

// console.log(yeniDizi[0])

// let selamla = () => {
//     console.log("selam")
// }

// setTimeout(() => {
//     selamla()
// }, 2000);



// function KullaniciVerisiGeldiMi() {

//     return new Promise((revolse, reject) => {
//         const userData = 0;

//         if (userData) {
//             revolse(userData)
//         }
//         else {
//             reject("veri yok")
//         }
//     }, 20000)

// }


// KullaniciVerisiGeldiMi()



// const Users = [
//     kullanici = {
//         isim: "memoli",
//         soyisim: "temizaltın",
//         yas: 26,
//         telNo: "05377983365",
//         adress: {
//             city: "istanbul",
//             street: "kenan",
//         }
//     },

//     user2 = {
//         isim: "ahmet",
//         soyisim: "yılmaz",
//         yas: 28,
//         telNo: "05321234567",
//         adress: {
//             city: "ankara",
//             street: "atatürk",
//         }
//     },

//     user3 = {
//         isim: "mehmet",
//         soyisim: "kaya",
//         yas: 32,
//         telNo: "05431234567",
//         adress: {
//             city: "izmir",
//             street: "cumhuriyet",
//         }
//     },

//     user4 = {
//         isim: "ayşe",
//         soyisim: "demir",
//         yas: 24,
//         telNo: "05541234567",
//         adress: {
//             city: "bursa",
//             street: "gazi",
//         }
//     },

//     user5 = {
//         isim: "elif",
//         soyisim: "çelik",
//         yas: 29,
//         telNo: "05361234567",
//         adress: {
//             city: "antalya",
//             street: "atatürk",
//         }
//     },

//     user6 = {
//         isim: "burak",
//         soyisim: "şahin",
//         yas: 31,
//         telNo: "05461234567",
//         adress: {
//             city: "adana",
//             street: "özgürlük",
//         }
//     },

//     user7 = {
//         isim: "zeynep",
//         soyisim: "arslan",
//         yas: 27,
//         telNo: "05521234567",
//         adress: {
//             city: "konya",
//             street: "mevlana",
//         }
//     },

//     user8 = {
//         isim: "can",
//         soyisim: "özdemir",
//         yas: 35,
//         telNo: "05381234567",
//         adress: {
//             city: "trabzon",
//             street: "sahil",
//         }
//     },

//     user9 = {
//         isim: "berfin",
//         soyisim: "koç",
//         yas: 23,
//         telNo: "05481234567",
//         adress: {
//             city: "kocaeli",
//             street: "ismet paşa",
//         }
//     },

//     user10 = {
//         isim: "emre",
//         soyisim: "aksoy",
//         yas: 30,
//         telNo: "05551234567",
//         adress: {
//             city: "eskişehir",
//             street: "bağlar",
//         }
//     }
// ]


// let yazdir = (Users) => {
//     for (let i = 0; i <= Users.length - 1; i++) {
//         console.log(Users[i].isim)
//     }
// }

// yazdir(Users)




// let kisiler = ["memoli", "melisa", "fatih"]


// try {
//     let isim = kisiler.includes("savaş")



// }
// catch (e) {
//     console.log(e)
// }
// finally {

// }



// function fon(sayi) {
//     try {

//         let sayi1;
//         let topla = sayi + sayi1

//         console.log(topla)
//     }

//     catch (e) {
//         console.log("hata", e)
//     }
//     finally {
//         console.log("işlem tamamlandı")
//     }

// }


// let sayi = 20;
// fon(sayi)

// let adSoyad = "memoli temizaltın"

// function Bilgi(adSoyad, callback) {
//     console.log(adSoyad)
//     callback();

// }

// function numara() {
//     return topla = 1 + 2
// }


// Bilgi(adSoyad, numara)

// let sonuc = numara()

// console.log("işte sonuç : ", sonuc)








// let user = {
//     name: "memoli",
//     surname: "temizaltın",
//     age: 21
// }

// Object.entries(user).forEach((e) => {
//     console.log(e)
// })

// let memo = Object.keys(user)
// console.log(memo)

// kisiler[0].country = "istanbul"

// console.log(kisiler[0].country)

// const person = new Object()

// person.name = "mehmet"
// person.surname = "kalakalmış"


// console.log(person.name)

// let sayi = Math.floor(Math.random() * 1000)


// console.log(sayi)

// let iller = [
//     { plaka: "01", sehir: "Adana", bolge: "Akdeniz" },
//     { plaka: "02", sehir: "Adıyaman", bolge: "Güneydoğu Anadolu" },
//     { plaka: "03", sehir: "Afyonkarahisar", bolge: "Ege" },
//     { plaka: "04", sehir: "Ağrı", bolge: "Doğu Anadolu" },
//     { plaka: "05", sehir: "Amasya", bolge: "Karadeniz" },
//     { plaka: "06", sehir: "Ankara", bolge: "İç Anadolu" },
//     { plaka: "07", sehir: "Antalya", bolge: "Akdeniz" },
//     { plaka: "08", sehir: "Artvin", bolge: "Karadeniz" },
//     { plaka: "09", sehir: "Aydın", bolge: "Ege" },
//     { plaka: "10", sehir: "Balıkesir", bolge: "Marmara" },
//     { plaka: "11", sehir: "Bilecik", bolge: "Marmara" },
//     { plaka: "12", sehir: "Bingöl", bolge: "Doğu Anadolu" },
//     { plaka: "13", sehir: "Bitlis", bolge: "Doğu Anadolu" },
//     { plaka: "14", sehir: "Bolu", bolge: "Karadeniz" },
//     { plaka: "15", sehir: "Burdur", bolge: "Akdeniz" },
//     { plaka: "16", sehir: "Bursa", bolge: "Marmara" },
//     { plaka: "17", sehir: "Çanakkale", bolge: "Marmara" },
//     { plaka: "18", sehir: "Çankırı", bolge: "İç Anadolu" },
//     { plaka: "19", sehir: "Çorum", bolge: "Karadeniz" },
//     { plaka: "20", sehir: "Denizli", bolge: "Ege" },
//     { plaka: "21", sehir: "Diyarbakır", bolge: "Güneydoğu Anadolu" },
//     { plaka: "22", sehir: "Edirne", bolge: "Marmara" },
//     { plaka: "23", sehir: "Elazığ", bolge: "Doğu Anadolu" },
//     { plaka: "24", sehir: "Erzincan", bolge: "Doğu Anadolu" },
//     { plaka: "25", sehir: "Erzurum", bolge: "Doğu Anadolu" },
//     { plaka: "26", sehir: "Eskişehir", bolge: "İç Anadolu" },
//     { plaka: "27", sehir: "Gaziantep", bolge: "Güneydoğu Anadolu" },
//     { plaka: "28", sehir: "Giresun", bolge: "Karadeniz" },
//     { plaka: "29", sehir: "Gümüşhane", bolge: "Karadeniz" },
//     { plaka: "30", sehir: "Hakkari", bolge: "Doğu Anadolu" },
//     { plaka: "31", sehir: "Hatay", bolge: "Akdeniz" },
//     { plaka: "32", sehir: "Isparta", bolge: "Akdeniz" },
//     { plaka: "33", sehir: "Mersin", bolge: "Akdeniz" },
//     { plaka: "34", sehir: "İstanbul", bolge: "Marmara" },
//     { plaka: "35", sehir: "İzmir", bolge: "Ege" },
//     { plaka: "36", sehir: "Kars", bolge: "Doğu Anadolu" },
//     { plaka: "37", sehir: "Kastamonu", bolge: "Karadeniz" },
//     { plaka: "38", sehir: "Kayseri", bolge: "İç Anadolu" },
//     { plaka: "39", sehir: "Kırklareli", bolge: "Marmara" },
//     { plaka: "40", sehir: "Kırşehir", bolge: "İç Anadolu" },
//     { plaka: "41", sehir: "Kocaeli", bolge: "Marmara" },
//     { plaka: "42", sehir: "Konya", bolge: "İç Anadolu" },
//     { plaka: "43", sehir: "Kütahya", bolge: "Ege" },
//     { plaka: "44", sehir: "Malatya", bolge: "Doğu Anadolu" },
//     { plaka: "45", sehir: "Manisa", bolge: "Ege" },
//     { plaka: "46", sehir: "Kahramanmaraş", bolge: "Akdeniz" },
//     { plaka: "47", sehir: "Mardin", bolge: "Güneydoğu Anadolu" },
//     { plaka: "48", sehir: "Muğla", bolge: "Ege" },
//     { plaka: "49", sehir: "Muş", bolge: "Doğu Anadolu" },
//     { plaka: "50", sehir: "Nevşehir", bolge: "İç Anadolu" },
//     { plaka: "51", sehir: "Niğde", bolge: "İç Anadolu" },
//     { plaka: "52", sehir: "Ordu", bolge: "Karadeniz" },
//     { plaka: "53", sehir: "Rize", bolge: "Karadeniz" },
//     { plaka: "54", sehir: "Sakarya", bolge: "Marmara" },
//     { plaka: "55", sehir: "Samsun", bolge: "Karadeniz" },
//     { plaka: "56", sehir: "Siirt", bolge: "Güneydoğu Anadolu" },
//     { plaka: "57", sehir: "Sinop", bolge: "Karadeniz" },
//     { plaka: "58", sehir: "Sivas", bolge: "İç Anadolu" },
//     { plaka: "59", sehir: "Tekirdağ", bolge: "Marmara" },
//     { plaka: "60", sehir: "Tokat", bolge: "Karadeniz" },
//     { plaka: "61", sehir: "Trabzon", bolge: "Karadeniz" },
//     { plaka: "62", sehir: "Tunceli", bolge: "Doğu Anadolu" },
//     { plaka: "63", sehir: "Şanlıurfa", bolge: "Güneydoğu Anadolu" },
//     { plaka: "64", sehir: "Uşak", bolge: "Ege" },
//     { plaka: "65", sehir: "Van", bolge: "Doğu Anadolu" },
//     { plaka: "66", sehir: "Yozgat", bolge: "İç Anadolu" },
//     { plaka: "67", sehir: "Zonguldak", bolge: "Karadeniz" },
//     { plaka: "68", sehir: "Aksaray", bolge: "İç Anadolu" },
//     { plaka: "69", sehir: "Bayburt", bolge: "Karadeniz" },
//     { plaka: "70", sehir: "Karaman", bolge: "İç Anadolu" },
//     { plaka: "71", sehir: "Kırıkkale", bolge: "İç Anadolu" },
//     { plaka: "72", sehir: "Batman", bolge: "Güneydoğu Anadolu" },
//     { plaka: "73", sehir: "Şırnak", bolge: "Güneydoğu Anadolu" },
//     { plaka: "74", sehir: "Bartın", bolge: "Karadeniz" },
//     { plaka: "75", sehir: "Ardahan", bolge: "Doğu Anadolu" },
//     { plaka: "76", sehir: "Iğdır", bolge: "Doğu Anadolu" },
//     { plaka: "77", sehir: "Yalova", bolge: "Marmara" },
//     { plaka: "78", sehir: "Karabük", bolge: "Karadeniz" },
//     { plaka: "79", sehir: "Kilis", bolge: "Güneydoğu Anadolu" },
//     { plaka: "80", sehir: "Osmaniye", bolge: "Akdeniz" },
//     { plaka: "81", sehir: "Düzce", bolge: "Karadeniz" }
// ];







// iller.map((e) => {
//     console.log(typeof e)
// })
// console.log("-----------------------------------")
// iller.forEach(function (e) {
//     console.log(typeof e)
// })










