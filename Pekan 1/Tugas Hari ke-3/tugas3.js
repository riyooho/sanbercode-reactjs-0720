// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kapitalKedua = kataKedua.charAt(0).toUpperCase()+kataKedua.substr(1)
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var kapitalKeempat  = kataKeempat.toUpperCase();
console.log(kataPertama .concat(" " + kapitalKedua + " " + kataKetiga + " " + kapitalKeempat));


// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var noPertama = Number(kataPertama);
var noKedua = Number(kataKedua);
var noKetiga = Number(kataKetiga);
var noKeempat = Number(kataKeempat);
console.log(noPertama+noKedua+noKetiga+noKeempat)

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substr(4, 10); 
var kataKetiga = kalimat.substr(15, 3); 
var kataKeempat = kalimat.substr(-12, 5);
var kataKelima = kalimat.substr(-6);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai = 13;
if ( nilai >= 80 ) {
	console.log("indeksnya A")
}
	else if(nilai >= 70 && nilai < 80) {
		console.log("indeksnya B")
	}
	else if(nilai >= 60 && nilai < 70) {
		console.log("indeksnya C")
	}
	else if(nilai >= 50 && nilai < 60) {
		console.log("indeksnya D")
	} 
else {
	console.log("indeksnya E")
}

//soal 5
var tanggal = 20;
var bulan = 5;
var tahun = 2000;
switch(bulan) {
case 1:   { bulan = 'Januari'; break; }
case 2:   { bulan = 'Februari'; break; }
case 3:   { bulan = 'Maret'; break; }
case 4:   { bulan = 'April'; break; }
case 5:   { bulan = 'Mei'; break; }
case 6:   { bulan = 'Juni'; break; }
case 7:   { bulan = 'Juli'; break; }
case 8:   { bulan = 'Agustus'; break; }
case 9:   { bulan = 'September'; break; }
case 10:  { bulan = 'Oktober'; break; }
case 11:  { bulan = 'November'; break; }
case 12:  { bulan = 'Desember'; break; }
default:  { bulan = 'Belum lahir'; }}
console.log(tanggal.toString() .concat(" " + bulan + " " + tahun.toString()));