// Menampilkan output
document.getElementById("pesan").textContent = "Hallo boy";

console.log("Hello World");

// Membuat tabel perkalian angka 7 dari 1 sampai 10
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

// Alret Promt
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

// eksperimen mandiri 
const inputA = prompt("Masukkan bilangan pertama:");
const inputB = prompt("Masukkan bilangan kedua:");

if (
    inputA === null || inputA.trim() === "" ||
    inputB === null || inputB.trim() === "" ||
    !Number.isFinite(Number(inputA)) ||
    !Number.isFinite(Number(inputB))
) {
    alert("Input harus berupa bilangan yang valid.");
} else {
    const a = Number(inputA);
    const b = Number(inputB);

    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

// Seleksi kondisi if else
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}

// Seleksi kondisi switch
const inputPilihan = prompt("Masukkan angka 1–5:");
    switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}

// DOM
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// Mini project calculator
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

document.getElementById("formNilai")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const inputTugas = document.getElementById("tugas").value;
        const inputUTS = document.getElementById("uts").value;
        const inputUAS = document.getElementById("uas").value;

        // Validasi kolom kosong
        if (
            inputTugas.trim() === "" ||
            inputUTS.trim() === "" ||
            inputUAS.trim() === ""
        ) {
            alert("Semua nilai wajib diisi!");
            return;
        }

        const tugas = Number(inputTugas);
        const uts = Number(inputUTS);
        const uas = Number(inputUAS);

        // Validasi nilai harus berada pada rentang 0–100
        const daftarNilai = [tugas, uts, uas];

        for (const nilai of daftarNilai) {
            if (!Number.isFinite(nilai) ||
                nilai < 0 || nilai > 100) {
                alert("Nilai harus berada pada rentang 0–100!");
                return;
            }
        }

        // Proses perhitungan
        const akhir = hitungNilaiAkhir(tugas, uts, uas);
        const huruf = tentukanPredikat(akhir);
        const kelulusan = akhir >= 60 ? "Lulus" : "Belum lulus";

        // Menampilkan hasil pada halaman HTML
        document.getElementById("nilaiAkhir").textContent =
            akhir.toFixed(2);

        document.getElementById("predikat").textContent = huruf;
        document.getElementById("status").textContent = kelulusan;
    });

// Mengosongkan hasil ketika tombol Reset ditekan
document.getElementById("formNilai")
    .addEventListener("reset", function() {
        document.getElementById("nilaiAkhir").textContent = "-";
        document.getElementById("predikat").textContent = "-";
        document.getElementById("status").textContent = "-";
    });
