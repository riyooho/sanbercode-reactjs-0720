import React from 'react';
import './App.css';

const FormBuah = () => {
	return (
		<form>
		<table>
			<tr>
				<td><label for="nama"><b>Nama Pelanggan</b></label></td>
				<td><input type="text" id="nama" name="nama"/></td>
			</tr>
			
			<tr>
				<td><label for="daftar"><b>Daftar Item</b></label></td>
				<td>
					<input type="checkbox" id="smk" name="daftar" value="smk"/>
					<label for="smk"> Semangka</label><br/>
					<input type="checkbox" id="jrk" name="daftar" value="jrk"/>
					<label for="jrk"> Jeruk</label><br/>
					<input type="checkbox" id="nns" name="daftar" value="nns"/>
					<label for="nns"> Nanas</label><br/>
					<input type="checkbox" id="slk" name="daftar" value="slk"/>
					<label for="slk"> Salak</label><br/>
					<input type="checkbox" id="agr" name="daftar" value="agr"/>
					<label for="agr"> Anggur</label><br/>
				</td>
			</tr>


			<tr><td><input class="button" type="submit" value="Kirim"/></td></tr>
		</table>
		</form>
		)
}

function App() {
  return (
  	<div>
      <h1>Form Pembelian Buah</h1>
      <FormBuah/>
    </div>
  );
}


export default App;

/*      function FormBuah() {
		return (
	      	<table>
			<form>
			<tr>
				<td><label for="nama"><b>Nama Pelanggan</b></label></td>
				<td><input type="text" id="nama" name="nama"/></td>
			</tr>
			<tr><td><input class="button" type="submit" value="Kirim"/></td></tr>
			</form>
			</table>
	)
}*/