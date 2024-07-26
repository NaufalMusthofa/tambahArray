// TUGAS
// Membuat jadwal kegiatan naufal selama 1 minggu, jadwal tersebut terdiri dari hari, tanggal bulan, dan tahun yang dilakukan nanti secara random menggunakan math.random
// contoh tampilannya Halo selamat datang, nama(random)\t\t\t jumat, 26 juli 2024\n 1. naufal ingin bekerja(random)
// dan nanti diacak nama nama hari dan taggl dst, menggunakan random computer

// Daily My Activity

// kita tentukan nama hari & bulan menggunakan array
const names = ['Naufal Musthofa', 'Dea Afrizal', 'Sandhika Galih', 'Barikli Azka', 'Ridhan Al-Aufar', 'Irgi Winarno', 'Salma Azzahra'];
const namaHari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', "jum'at", 'sabtu'];
const months = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september'];
const myDaily = ['activity 0', 'activity 1', 'activity 2', 'activity 3', 'activity 4', 'activity 5', 'activity 6']

// buat dengan menggunakan function
const dailyActivity = () => {
    // kita tentukan tanggal & tahun menggunakan methode pada javascript
    const tanggalMethod = new Date().getDate();
    const monthsMethod = new Date().getMonth();
    const tahunMethod = new Date().getFullYear();
    const hariMethod = new Date().getDay();

    // names, daily  random
    const namesRandom = Math.floor(Math.random() * names.length);
    const dailyRandom = Math.floor(Math.random() * myDaily.length);
    // const hariRandom = Math.floor(Math.random() * namaHari.length);

    // tentukan daily & names random nya + menggunakan perulangan for
    let myActivity;
    if (dailyRandom == 0 || namesRandom == 0){
        myActivity = (`Haloo Selamat Datang, ${names[namesRandom]}\t\t\t ${namaHari[hariMethod]}, ${tanggalMethod} ${months[monthsMethod]} ${tahunMethod}\n\nSedang belajar bahasa pemrograman javascript`);
    } else if (dailyRandom == 1 || namesRandom == 1){
        myActivity = (`Haloo Selamat Datang, ${names[namesRandom]}\t\t\t ${namaHari[hariMethod]}, ${tanggalMethod} ${months[monthsMethod]} ${tahunMethod}\n\nSedang pergi bekerja`);
    } else if (dailyRandom == 2 || namesRandom == 2){
        myActivity = (`Haloo Selamat Datang, ${names[namesRandom]}\t\t\t ${namaHari[hariMethod]}, ${tanggalMethod} ${months[monthsMethod]} ${tahunMethod}\n\nSedang bermain games`);
    } else if (dailyRandom == 3 || namesRandom == 3){
        myActivity = (`Haloo Selamat Datang, ${names[namesRandom]}\t\t\t ${namaHari[hariMethod]}, ${tanggalMethod} ${months[monthsMethod]} ${tahunMethod}\n\nSedang makan malam`);
    } else if (dailyRandom == 4 || namesRandom == 4){
        myActivity = (`Haloo Selamat Datang, ${names[namesRandom]}\t\t\t ${namaHari[hariMethod]}, ${tanggalMethod} ${months[monthsMethod]} ${tahunMethod}\n\nSedang pergi ke bogor`);
    } else if (dailyRandom == 5 || namesRandom == 5){
        myActivity = (`Haloo Selamat Datang, ${names[namesRandom]}\t\t\t ${namaHari[hariMethod]}, ${tanggalMethod} ${months[monthsMethod]} ${tahunMethod}\n\nSedang pergi sholat ${namaHari[5]}`);
    } else if (dailyRandom == 6 || namesRandom == 6){
        myActivity = (`Haloo Selamat Datang, ${names[namesRandom]}\t\t\t ${namaHari[hariMethod]}, ${tanggalMethod} ${months[monthsMethod]} ${tahunMethod}\n\nsedang membuat program sederhana`);
    }

    return myActivity;

    // kondisi names
    

    // setelah itu, kita buat math.random nya dari method random
    // const randomHari = Math.floor(Math.random() * namaHari.length);
    // const randomTanggal = Math.floor(Math.random() * tanggal)
    
}
console.log(dailyActivity());






