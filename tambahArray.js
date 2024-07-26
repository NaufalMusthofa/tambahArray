// TUGAS
// Membuat data mahasiswa (nama, nim) menggunakan array

// array data mahasiswa
const admin = ['Muhammad Naufal Musthofa']
const dataMhs = [];

// arrow function tambah mahasiswa tanpa mengulang
// const tambahMhs = (namaMhs, nimMhs) => {
//     if (dataMhs !== -1){
//         for (var i = 0; i < dataMhs.length; i++){
//             if (!namaMhs || !nimMhs){
//                 return `Harap Masukan Nama dan Nim nya, dan salah satu tidak boleh kosong!!`;
//             }

//             if (dataMhs[i].nama == undefined && dataMhs[i].nim == undefined){
//                 dataMhs[i] = {nama: namaMhs, nim: nimMhs};
//                 return `data undefined berhasil di isi/tambahkan!`;
//             } else {
//                 if (dataMhs[i].nama == namaMhs || dataMhs[i].nim == nimMhs){
//                     return `Nama yang anda masukan sudah terdaftar dalam data Mahasiswa Kami!, Harap di cek kembali!`;
//                 }
//             }
//         }
//     }
//     // tambah secara manual di console log
//     dataMhs.push({nama: namaMhs, nim: nimMhs});
//     return `Nama : ${namaMhs} Nim : ${nimMhs} berhasil di tambahkan`
// }
// tambahMhs();


// TUGAS
// Sama seperti di atas tetapi bisa mengulang dan memasukan data nya menggunakan popup box dengan dijalankan di halaman browser / document.write()

const tambahMhs = (namaMhs, nimMhs, addName, addNim) => {
    let number = dataMhs.length;
    if (dataMhs !== -1){
        namaMhs = prompt(`Masukan Nama Anda`);
        nimMhs = parseInt(prompt(`======= Mahasiswa ======\n\nNama : ${namaMhs}\nMasukan Nim Anda`));
        
        // memeriksa nama / nim sudah terdaftar
        for (let x = 0; x < dataMhs.length; x++){
            // kondisi ketika salah satu ada yg kosong
            if (!namaMhs || !nimMhs){
                return `Harap masukan nama/nim mahasiswa nya, dan salah satu tidak boleh kosong!`;
            }

            // kondisi ketika terdapat nilai undefined dan nama/nim yang sama
            if (dataMhs[x].nama == undefined && dataMhs[x].nim == undefined){
                dataMhs[x] = {nama: namaMhs, nim: nimMhs};
                return `nilai undefined berhasil ditambahkan mahasiswa baru!`;
            }
        }
    }

    // tambah
    dataMhs.push({nama: namaMhs, nim: nimMhs});
    document.write(`<br><br>${number+1}.) ${namaMhs}____ ${nimMhs}<br>`);

    // add nama/nim baru
    let ulang = true;
    while (ulang){
        let agreement = confirm(`Haloo admin, ${admin[0]}\n\nApakah anda ingin Menambah Data yang Baru ?`);

        // kondisi ketika agreement(true)/oke
        if (agreement){
            addName = prompt(`Masukan Nama/Nim Mahasiswa Baru`);
            addNim = parseInt(prompt(`Nama : ${addName}\nHarap Masukan Nim nya`));

            // kondisinya
            if (dataMhs !== -1){
                if (!addName || !addNim){
                    alert(`Harap masukan Nama/Nim nya, Dan salah satu tidak boleh ada yang Kosong!`);
                }
                // mengecek nama/nim sudah terdaftar
                let isRegistered = false;
                for (let y = 0; y < dataMhs.length; y++){
                    if (dataMhs[y].nama == addName || dataMhs[y].nim == addNim){
                        alert(`Nama / Nim yang anda masukan Sudah Terdaftar!, Harap Cek Kembali!`);
                        // jika kondisi true
                        isRegistered = true;
                        // maka diberhentikan
                        break;
                    }
                }
                // tambah add baru / jika kondisi nya salah, maka jalankna kode dibawah ini
                if (!isRegistered){
                    number = dataMhs.length + 1;
                    dataMhs.push({nama: addName, nim: addNim});
                    alert(`${number}.) Nama : ${addName} Nim : ${addNim} Mahasiswa Baru Berhasil ditambahkan!`)
                    document.write(`${number}.) ${addName}____ ${addNim}<br>`);
                }
            }

        } else {
            // ketika kondisi nya false, maka berhenti dari perulangan nya
            if (!agreement || !ulang){
                break;
            }
        }
    }
}
document.write(`No__Nama Mahasiswa______________Nim`);
tambahMhs();