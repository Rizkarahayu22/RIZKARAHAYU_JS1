// contoh funcition
function sapa(nama) {
    return "Assalamualaikum, " + nama + "!";
}
var pesanSapaan = sapa("Rizka Rahayu");

var hasilElemen = document.getElementById("fun");
hasilElemen.textContent = pesanSapaan;
