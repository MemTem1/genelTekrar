/*

let dizi = [1, 2, 3, 4, 5];
dizi.push(6);

for (let i = 0; i < dizi.length; i++) {
    console.log(dizi[i]);
}
    
console.log(dizi);
*/

let users = [
    memoli = {
        name: "memoli",
        surename: "temizaltın",
        age: 25,
        adress: {
            city: "istanbul",
            country: "turkey",
            state: "dedebayır",
            street: "kalemiye"
        }

    },
    selim = {
        name: "selim",
        surename: "yılmaz",
        age: 30,
        adress: {
            city: "ankara",
            country: "turkey",
            state: "dedebayır",
            street: "kalemiye"
        }

    },
    emrah = {
        name: "emrah",
        surename: "yıldız",
        age: 35,
        adress: {
            city: "gümüşhane",
            country: "turkey",
            state: "dedebayır",
            street: "kalemiye"
        }

    }

]


let tablo = `
    <tr>
                <th id="isim">İsim</th>
                <th id="soyisim">Soyisim</th>
                <th id="yas">Yaş</th>
                <th id="adres">Adres</th>
     </tr>

    <tr>
        <td>${users[0].name}</td>
        <td>${users[0].surename}</td>
        <td>${users[0].age}</td>
        <td>${users[0].adress.country}</td>
    </tr>
    <tr>
        <td>${users[1].name}</td>
        <td>${users[1].surename}</td>
        <td>${users[1].age}</td>
        <td>${users[1].adress.country}</td>
    </tr>
    <tr>
        <td>${users[2].name}</td>
        <td>${users[2].surename}</td>
        <td>${users[2].age}</td>
        <td>${users[2].adress.country}</td>
    </tr>

`;

document.getElementById("tablo").innerHTML = tablo;

