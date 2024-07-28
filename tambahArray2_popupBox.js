/*
TUGAS
// Membuat data mahasiswa (nama, nim) menggunakan array + popup box
// lalu untuk admin nya kita buat nama-nama nya Random pada saat di refresh
*/

const dataMhs = [];
const admin = ['Muhammad Naufal Musthofa', 'Sandhika Galih', 'Dea Afrizal'];

// kita buat fungsi, agar huruf pertaman dalam sebuah kata adalah huruf besar / capitalize
const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

const tambahDataMhs = (namaMhs, nimMhs) => {
    let number = dataMhs.length;
    let ulang = true;

    while (ulang){
        // admin Random
        const adminRandom = Math.floor(Math.random() * admin.length);

        // persetujuan
        let agreement = confirm(`Haloo Admin, ${admin[adminRandom]} (Random Admin)\n\nApakah anda ingin Menambah Data Mahasiswa ?`);

        // jika kondisi ketika agreement bernilai false
        if (!agreement){
            break;
        }

        // kondisi ketika agreement bernilai true
        if (agreement){
            namaMhs = prompt('Masukan Nama Mahasiswa Nya');
            nimMhs = parseInt(prompt(`Nama : ${namaMhs}\nMasukan Nim Nya`));

            // kondisi agar merubah huruf menjadi otomatis capitalize
            namaMhs = capitalizeWords(namaMhs);

            // kondisi ketika terdapat nama / nim yang sama
            let checkMhs = dataMhs.some(mhs => mhs.nama === namaMhs || mhs.nim === nimMhs);

            // kondisi ketika nama yang kita input tidak sesuai
            if (/\d/.test(namaMhs)){
                alert(`Error.. Harap Input Nama Nya dengan Benar!`);
                continue;
            }

            // kondisi ketika input nim tidak benar, malah memasukan string / tidak diisi
            if (isNaN(nimMhs)){
                alert(`Error.. Harap Input Dengan Benar!`);
                continue; // maksudnya kita melakukan iterasi ulang, jadi nama yang kita masukan tadi diulang juga, karna tadi terdapat nim yang tidak sesuai
            }

            // cek mahasiswa nama & nim nya
            if (checkMhs){ // jika kondisi checkMhs bernilai true / terdapat nama / nim yang sama, maka
                alert(`Nama / Nim sudah terdaftar, Harap cek & input kembali!`);
            } else {
                // add mahasiswa dan tampilkan + number bertambah
                number = number + 1;
                dataMhs.push({nama: namaMhs, nim: nimMhs});
                alert(`${number}.) Nama : ${namaMhs}___Nim : ${nimMhs}\n\nBerhasil di tambahkan!`);
                document.write(`<br><br>${number}.) ${namaMhs}____ ${nimMhs}`)
            }
        }
    }
}
document.write(`No__Nama Mahasiswa________Nim`)
tambahDataMhs();