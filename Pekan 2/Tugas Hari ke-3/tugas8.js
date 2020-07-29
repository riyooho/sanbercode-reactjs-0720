// soal 1
const phi = 3.14
let r = 50
const luasO = () => {
	return phi * r * r
}
const kelilingO = () => {
	return	phi * r * 2
}
console.log(luasO())
console.log(kelilingO())

// soal 2
let kalimat = ""
const tambahKata = (kata) => {
		kalimat	= `${kata}`
}
tambahKata(`Saya adalah seorang frontend developer`)
console.log(kalimat)

// soal 3
class Buku {
	constructor(name, totalPage, price) {
		this.name = name,
		this.totalPage = totalPage,
		this.price = price
	}
}
let BukuSaya = new Buku('Pulang', 190, 79000)
console.log(BukuSaya)

class Komik extends Buku {
	constructor(name, totalPage, price) {
		super(name, totalPage, price)
		this.isColorful = true
	}
}
let KomikSaya = new Komik(`One Piece`, 20, 50000)
console.log(KomikSaya)