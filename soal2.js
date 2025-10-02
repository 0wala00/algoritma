const prompt = require("prompt-sync")({ sigint: true });


let jamMasuk = Number(prompt("Masukan Jam masuk Anda :"))
let jamKeluar = Number(prompt ("Masukan Jam Keluar :"))
let selisih
if (jamMasuk <= jamKeluar){
    selisih = jamKeluar - jamMasuk
}else if (jamMasuk >= jamKeluar) {
    selisih = (12 - jamMasuk) + jamKeluar
}

let tarif

if (selisih == 2){
     tarif + 2000
} else if (selisih > 2){
    tarif = selisih * 500 + 2000
}
console.log(`${tarif} Rupiah untuk harga parkir kendaraan anda`)
