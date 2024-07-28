// TUGAS
// Membuat data mahasiswa (nama, nim) menggunakan array

// array data mahasiswa
const admin = ['Muhammad Naufal Musthofa']
const dataMhs = [];

// arrow function tambah mahasiswa tanpa mengulang
const tambahMhs = (namaMhs, nimMhs) => {
    if (dataMhs !== -1){
        for (var i = 0; i < dataMhs.length; i++){
            if (!namaMhs || !nimMhs){
                return `Harap Masukan Nama dan Nim nya, dan salah satu tidak boleh kosong!!`;
            }

            if (dataMhs[i].nama == undefined && dataMhs[i].nim == undefined){
                dataMhs[i] = {nama: namaMhs, nim: nimMhs};
                return `data undefined berhasil di isi/tambahkan!`;
            } else {
                if (dataMhs[i].nama == namaMhs || dataMhs[i].nim == nimMhs){
                    return `Nama yang anda masukan sudah terdaftar dalam data Mahasiswa Kami!, Harap di cek kembali!`;
                }
            }
        }
    }
    // tambah secara manual di console log
    dataMhs.push({nama: namaMhs, nim: nimMhs});
    return `Nama : ${namaMhs} Nim : ${nimMhs} berhasil di tambahkan`
}
tambahMhs();