// days
// tampilannya Jumat, 26 juli 2024
const namaHari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
const bulan = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september'];

const days = new Date().getDay();
const dates = new Date().getDate();
const months = new Date().getMonth();
const years = new Date().getFullYear();

console.log(`${namaHari[days]} ${dates} ${bulan[months]} ${years}`);


// TUGAS
// Membuat jadwal kegiatan naufal selama 1 minggu, jadwal tersebut terdiri dari hari, tanggal bulan, dan tahun yang dilakukan nanti secara random menggunakan math.random
// contoh sabtu, 27 juli 2024\n 1. naufal ingin bekerja
// dan nanti diacak nama nama hari dan taggl dst, menggunakan random computer

