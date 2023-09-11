//Variabel & Tipe Data
var user = "Desti zulfayani"
let age = "20"
const alamat = "jl khairil anwar gg batu besar tanjung karang pusat bandar lampung"
console.log(`Nama : ${user}\nUmur : ${age}\nAlamat : ${alamat}`)

let creator = {
    email: "zulfayanidesti@gmail.com",
    github: "https://github.com/Destii26/"
}

console.log(creator)

//Operator
let a = 10
let b = 5
console.log(`a = ${a}\nb = ${b}`)
console.log(`a + b = ${a + b}`)
console.log(`a - b = ${a - b}`)
console.log(`a * b = ${a * b}`)
console.log(`a / b = ${a / b}`)
console.log(`a % b = ${a % b}`)
console.log(`a > b = ${a > b}`)

//Pop Up & Kondisi
alert("Selamat Datang di halaman - Javascript Dasar")
let nama = prompt("Masukkan Nama Anda : ")
if(nama) {
    alert(`Halo ${nama}, Ini adalah PopUp box dalam Javascript. Terima Kasih!`)
} else {
    alert("jika anda tidak mau memasukkan nama :(, Ok tidak masalah. Terima Kasih!")
}

//type conversion & function
let angka = 10
console.log(`Datawal Angka : ${angka}`)

function conv(num) {
    console.log(`Angka -> String : ${String(num)}`)
    console.log(`Angka -> Boolean : ${Boolean(num)}`)
}

conv(angka)

//Perulangan (Loop)
for (let index = 0; index < 5; index++) {
    console.log(`Perulangan ke-${index}`)
}