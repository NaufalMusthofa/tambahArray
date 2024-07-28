const dataMhs = [];
const admin = ['Muhammad Naufal Musthofa'];

const tambahMhs = () => {
    while (true) {
        let agreement = confirm('Tambah mahasiswa baru?');
        if (!agreement) {
            break;
        }

        let namaMhs = prompt('Masukkan nama mahasiswa:');
        let nimMhs = prompt(`Nama: ${namaMhs}\nMasukkan NIM:`);

        // Cek apakah NIM sudah ada
        let exists = dataMhs.some(mhs => mhs.nim === nimMhs);

        if (exists) {
            alert('Nama atau NIM sudah ada.');
        } else {
            // Tambah mahasiswa baru
            dataMhs.push({ nama: namaMhs, nim: nimMhs });
            alert(`${namaMhs} dengan NIM ${nimMhs} berhasil ditambahkan.`);
            document.write(`<br><br>${dataMhs.length}. ${namaMhs} ${nimMhs}`);
        }
    }
}

document.write(`No__Nama Mahasiswa______________NIM`);
tambahMhs();





// CATATAN
// some adalah metode array yang memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi yang diberikan oleh fungsi callback. Dalam hal ini, arrow function mhs => mhs.nim === nimMhs memeriksa apakah ada objek mahasiswa dalam dataMhs yang memiliki nim sama dengan nimMhs yang baru dimasukkan.
