// soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objectDaftarPeserta = {
	Nama : "Asep",
	"Jenis kelamin" : "laki-laki",
	Hobi : "baca buku",
	"Tahun lahir" : 1992
}
console.log(typeof objectDaftarPeserta)

// soal 2
var buah = [{nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000}, {nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000}, {nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": "ada", harga: 10000}, {nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000}]
console.log(buah[0])

// soal 3
var dataFilm = []
var tambahdataFilm = {
	nama : "One Piece",
	durasi : 120,
	genre : "fiksi",
	tahun : 1997
}
function tambahFilm(tambahdataFilm) {
	dataFilm.push(tambahdataFilm)
}
tambahFilm(tambahdataFilm)
console.log(dataFilm)

// soal 4
// release 0
class Animal {
	constructor(name) {
		this.name = name
		this.legs = 4
		this.cold_blooded = "false"
	}

	get nameAnimal() {
		return this.name
	}
}

var sheep = new Animal("shaun");
sheep.nameAnimal = "shaun"
 
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)

//release 1

class Frog extends Animal {
	constructor(name) {
		super()
		this.name = name
	}
	jump() {
		return "hop hop"
	}
}
class Ape extends Animal {
	constructor(name) {
		super()
		this.name = name
		this.legs = 2
	}
	yell() {
		return "Auooo"
	}
}
var sungokong = new Ape("kera sakti")
sungokong.yell()
 
var kodok = new Frog("buduk")
kodok.jump()
 
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
console.log(sungokong.yell())
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log(kodok.jump())

// soal 5
class Clock {
	constructor({ template }) {
		this.template = template
	}

	render() {
		var date = new Date();

	    var hours = date.getHours();
	    if (hours < 10) hours = '0' + hours;

	    var mins = date.getMinutes();
	    if (mins < 10) mins = '0' + mins;

	    var secs = date.getSeconds();
	    if (secs < 10) secs = '0' + secs;

	    var output = this.template
	      .replace('h', hours)
	      .replace('m', mins)
	      .replace('s', secs);
		
	    console.log(output);
	}

stop() {
    clearInterval(this.timer);
  }

start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({template : 'h:m:s'});
clock.start();  