//Soal no 1
const umur = 3;
if (umur >= 5) {
  console.log("Anda harus membayar tiket penuh");
} else if (umur >= 2 && umur < 5) {
  console.log("Anda harus membayar setengah harga");
} else {
  console.log("Anda tidak boleh masuk");
}
//Soal no 1 done


//Soal no 2
const usiaSim = 17;
const usiaAnda = 20;

if (usiaAnda >= usiaSim) {
  console.log("Anda sudah berhak mendapatkan SIM");
} else {
  console.log("Anda belum berhak mendapatkan SIM");
}
//Soal no 2 done


//Soal no 3
const angka = 12;

if (angka > 0) {
  console.log("Angka tersebut positif");
} else if (angka < 0) {
  console.log("Angka tersebut negatif");
} else {
  console.log("Angka tersebut netral");
}
//Soal no 3 done


// soal no 4
const posisiPlayer = { x: -1, y: 2 };

if (posisiPlayer.x > 0 && posisiPlayer.y > 0) {
  console.log("Player di kanan atas");
} else if (posisiPlayer.x > 0 && posisiPlayer.y < 0) {
  console.log("Player di kanan bawah");
} else if (posisiPlayer.x < 0 && posisiPlayer.y > 0) {
  console.log("Player di kiri atas");
} else if (posisiPlayer.x < 0 && posisiPlayer.y < 0) {
  console.log("Player di kiri bawah");
} else {
  console.log("Player di tengah");
}
//Soal no 4 done


//Soal no 5
const totalPembelian = 200;
let diskon = 0;

if (totalPembelian >= 200) {
  console.log("Selamat, Anda mendapatkan diskon sebesar 15%");
  
  diskon = 0.15;
} else if (totalPembelian >= 100 && totalPembelian <= 199) {
  diskon = 0.10;
}

const totalSetelahDiskon = totalPembelian - totalPembelian * diskon;
console.log(`Total pembelian setelah diskon adalah ${totalSetelahDiskon}`);
// Soal no 5 done


// Soal no 6
const usiaPengguna = 18;

if (usiaPengguna >= 18) {
  console.log("Registrasi berhasil");
} else {
  console.log("Registrasi gagal");
}
//Soal no 6 done