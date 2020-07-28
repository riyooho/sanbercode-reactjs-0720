// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
]

function BacaBuku(x, i) {
	readBooks(x, books[i], function(check) {
		if(x > 0 && i + 1 < books.length) {
	 		x = check
	 		BacaBuku(check, i + 1)
	 	} else {
	 		console.log("selesai")
	 	}

	})
}
BacaBuku(10000, 0)