// soal 1
var maju = 2;
var mundur = 20;
console.log("LOOPING PERTAMA")
while(maju <= 20) {
  console.log(maju + ' - I love coding');
  maju+= 2;
}
console.log("LOOPING KEDUA")
while(mundur >= 2) {
  console.log(mundur + ' - I will become a frontend developer');
  mundur-= 2;
}

 // soal 2
for(var x = 1; x <= 20; x++) {
 	if((x % 3) == 0 && (x % 2) !== 0) {
	  	console.log(x + '- I Love Coding')
 	} 
 		else if((x % 2) !== 0) {
  		console.log(x + '- Santai')
	}
 	else if((x % 2) == 0) {
	  	console.log(x + '- Berkualitas')
	}
  }

// soal 3
var n = "";
for(var a = 1; a <= 7; a++) {
	for(var b = 1; b <= a; b++){
		n += "#"
		}
	n += "\n"	
	}
console.log(n)

// soal 4
var kalimat="saya sangat senang belajar javascript"
var kal = kalimat.split(" ")
console.log(kal)

// soal 5
var buah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var urut = buah.sort()
for(var f=0; f<5; f++) {
	console.log(urut[f])
}