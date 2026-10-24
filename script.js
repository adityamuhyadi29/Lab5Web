
document.getElementById("pesan").textContent = "Hallo boy";

console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:",
        b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:",
        b !== 0 ? a % b : "Tidak dapat dibagi nol");
}

operasiDasar(9, 4);
const inputNilai = promt("Masukkan nilai (0-100):");
const nilaiMahasiswa = Number(inputNilai);

if(inputNilai === null || inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa <0 || nilaiMahasiswa > 100) {
    alert("Input tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else{
    alert("Belum lulus");
}
    