var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function BacaBuku(x, i) {
	readBooksPromise(x, books[i])
	.then(function(yes) {
		BacaBuku(yes, i + 1)
	})
	.catch(function(no) {
		console.log("selesai")
	})
}
BacaBuku(10000, 0)
// Lanjutkan code untuk menjalankan function readBooksPromise 