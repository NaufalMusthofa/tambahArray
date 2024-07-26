const dataMhs = [];
const admin = ['Muhammad Naufal Musthofa'];

const tambahMhs = (namaMhs, nimMhs, addName, addNim) => {
    let number = dataMhs.length;

    // add nama/nim baru
    let ulang = true;
    while (ulang){
        let agreement = confirm(`Haloo admin, ${admin[0]}\n\nApakah anda ingin Menambah Data Mahasiswa yang Baru ?`);

        // kondisi ketika agreement(true)/oke
        if (agreement){
            addName = prompt(`Masukan Nama Mahasiswa nya`);
            addNim = parseInt(prompt(`Nama : ${addName}\nHarap Masukan Nim nya`));

            // kondisinya
            if (dataMhs !== -1){
                if (!addName || addNim){
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
                    if (isNaN(addName) || isNaN(addNim)){
                        isRegistered = true;
                    } else {
                        number = dataMhs.length + 1;
                        dataMhs.push({nama: addName, nim: addNim});
                        alert(`${number}.) Nama : ${addName} Nim : ${addNim}\n\nMahasiswa Berhasil ditambahkan!`)
                        document.write(`<br><br>${number}.) ${addName}____ ${addNim}`);
                    }
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