const password = '12345'
const validpassword = '123456'
var retry = 0;

if(password==validpassword) {
    console.log("Selamat datang bos!")
} else {
    console.log("Password Salah, coba lagi")
}

if(password==validpassword) {
    console.log("Selamat datang bos!")
} else if(retry<3) {
    console.log("Ulangi!")
    retry++
} else {
    console.log("Batas pengisian")
}