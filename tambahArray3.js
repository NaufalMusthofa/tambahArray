const dataMhs = [];

// fungsi kita akan membuat capitalize, huruf depan nya jadi besar dan lainnya kecil
const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}


const tambahMhs = (namaMhs, nimMhs) => {
    let ulang = true;
    let number = dataMhs.length;

    while (ulang){
        let agreement = confirm(`Apakah anda ingin Menambah Data Mahasiswa ?`);
        // kondisi ketika user memilih cancel
        if (!agreement){
            break;
        }

        // kondisi ketika user memilih oke 
        
        if (agreement){
            namaMhs = prompt(`Masukan Nama Mahasiswa nya`);
            nimMhs = parseInt(prompt(`Nama : ${namaMhs}\nMasukan Nim nya`));

            // setelah kita menginout namaMhs, maka kita panggil kondisi nya agar huruf awal nya menjadi besar (capitalize)
            namaMhs = capitalizeWords(namaMhs);

            // kita buat, ketika kondisi terdapat nama / nim yang sama yang sudah terdaftar, maka program nya akan memberikan alert nama / nim sudah terdaftar harap cek dan masukan kembali nim nya dengan benar
            let checkMhs = dataMhs.some(mhs => mhs.Nama == namaMhs || mhs.Nim == nimMhs);

            // kondisi ketika kita memasukan nama dengan angkka, maka terdapat pesan alert error
            if (/\d/.test(namaMhs)){
                alert(`Harap masukan Nama dengan benar!, Dengan string dan bukan angka!`);
                continue;
            }

            // kondisi ketika kita ingin memasukan nim dengan string, maka terdapat pesan alert error
            if (isNaN(nimMhs)){
                alert(`Error.. Harap cek dengan benar saat memasukan Form Mahasiswa`);
                continue;
            }

            if (checkMhs){ // bernilai true
                alert(`Nama / Nim yang anda masukan sudah terdaftar!, Harap cek kembali`);
            }  else {
                dataMhs.push({Nama: namaMhs, Nim: nimMhs});
                // popupbox untuk menampilkan alert nya + number
                number = number + 1;
                alert(`${number}. ${namaMhs}____ ${nimMhs} Berhasil Ditambahkan`)

                // tampilkan data mahasiswa nya 
                document.write(`<br><br>${number}. ${namaMhs}____ ${nimMhs}`);
            }

        } else {
            if (!agreement){
                break;
            }
        }
    }
}
document.write(`No__Nama Mahasiswa____________Nim`);
tambahMhs();