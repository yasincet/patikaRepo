const fs = require('fs');

// Yeni bir çalışan verisi
const yeniCalisan = {
  name: "Employee 1 Name",
  salary: 2000
};

// JSON formatında veriyi bir değişkene kaydedelim
const veri = JSON.stringify(yeniCalisan, null, 2);

// Dosyaya veriyi yazalım
fs.writeFile('employees.json', veri, 'utf8', (hata) => {
  if (hata) {
    console.error('Dosya oluşturma hatası:', hata);
  } else {
    console.log('employees.json dosyası oluşturuldu ve veri eklendi.');
  }
});

fs.readFile('employees.json', 'utf8', (hata, veri) => {
    if (hata) {
      console.error('Dosya okuma hatası:', hata);
    } else {
      const calisanVerisi = JSON.parse(veri);
      console.log('Okunan veri:', calisanVerisi);
    }
  });

  fs.readFile('employees.json', 'utf8', (hata, veri) => {
    if (hata) {
      console.error('Dosya okuma hatası:', hata);
    } else {
      const calisanVerisi = JSON.parse(veri);
      
      // Veriyi güncelleyelim
      calisanVerisi.name = "Güncellenmiş İsim";
      calisanVerisi.salary = 2500;
  
      // JSON formatında güncellenmiş veriyi bir değişkene kaydedelim
      const guncellenmisVeri = JSON.stringify(calisanVerisi, null, 2);
  
      // Dosyaya güncellenmiş veriyi yazalım
      fs.writeFile('employees.json', guncellenmisVeri, 'utf8', (hata) => {
        if (hata) {
          console.error('Dosya güncelleme hatası:', hata);
        } else {
          console.log('Veri güncellendi.');
        }
      });
    }
  });

  fs.unlink('employees.json', (hata) => {
    if (hata) {
      console.error('Dosya silme hatası:', hata);
    } else {
      console.log('employees.json dosyası silindi.');
    }
  });
  
  