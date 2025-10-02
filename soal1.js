const prompt = require("prompt-sync")({ sigint: true });


let jamMasuk = Number(prompt("Masukan Jam masuk Anda :"))
let jamKeluar = Number(prompt ("Masukan Jam Keluar :"))
let selisih
if (jamMasuk <= jamKeluar){
    selisih = jamKeluar - jamMasuk
}else if (jamMasuk >= jamKeluar) {
    selisih = (12 - jamMasuk) + jamKeluar
}

console.log(selisih)