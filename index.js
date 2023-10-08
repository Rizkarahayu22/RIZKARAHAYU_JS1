// contoh if else dan nested if
var hasilElemen = document.getElementById("Hasil");
// Contoh penggunaan if-else
var x = 12;
var y = 12;

if (x < y) {
    hasilElemen.innerHTML = "X lebih kecil dari Y";
} else if (x > y) {
    hasilElemen.innerHTML = "X lebih besar dari Y";
} else {
    hasilElemen.innerHTML = "X sama dengan Y";
}
// Contoh penggunaan nested if
var nilai = 12;

if (nilai >= 85) {
    hasilElemen.innerHTML += "<br>Nilai: A";
} else {
    if (nilai >= 75) {
        hasilElemen.innerHTML += "<br>Nilai: B";
    } else {
        if (nilai >= 70) {
            hasilElemen.innerHTML += "<br>Nilai: C";
        } else {
            hasilElemen.innerHTML += "<br>Nilai: D";
        }
    }
}
// Contoh penggunaan ternary operator
var umur = 12;
var status = (umur >= 18) ? "Dewasa" : "Anak-anak";

hasilElemen.innerHTML += "<br>Status: " + status;




// contoh switch
var hasilElemen = document.getElementById("hasil");
// Contoh penggunaan switch-case
var hari = new Date().getDay();
var namaHari;

switch (hari) {
    case 0:
        namaHari = "Minggu";
        break;
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    default:
        namaHari = "Hari tidak valid";
}

hasilElemen.innerHTML = "Hari ini adalah " + namaHari;




// contoh for statment
var daftarAngkaElemen = document.getElementById("berhasil");
for (var i = 1; i <= 10; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = "Angka " + i;
    daftarAngkaElemen.appendChild(listItem);
}



// contoh while, do-while
var daftarAngkaWhileElemen = document.getElementById("daftarAngkaWhile");
var daftarAngkaDoWhileElemen = document.getElementById("daftarAngkaDoWhile");

var i = 1;
while (i <= 5) {
    var listItem = document.createElement("li");
    listItem.textContent = "Angka " + i;
    daftarAngkaWhileElemen.appendChild(listItem);
    i++;
}

var j = 1;
do {
    var listItem = document.createElement("li");
    listItem.textContent = "Angka " + j;
    daftarAngkaDoWhileElemen.appendChild(listItem);
    j++;
} while (j <= 5);



// Deklarasi dan definisi sebuah fungsi
function sapa(nama) {
    return "Halo, " + nama + "!";
}

// Memanggil fungsi sapa
var pesanSapaan = sapa("John");

// Menampilkan hasil ke dalam elemen HTML
var hasilElemen = document.getElementById("asil");
hasilElemen.textContent = pesanSapaan;

