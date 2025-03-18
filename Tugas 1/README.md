# Introduction to JavaScript or TypeScript

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)

## Pendahuluan
JavaScript dan TypeScript adalah dua bahasa pemrograman yang sangat populer dalam pengembangan web. JavaScript adalah bahasa pemrograman tingkat tinggi yang penting untuk menambahkan elemen interaktif ke situs web. TypeScript, di sisi lain, adalah superset statis dari JavaScript yang menambahkan fitur seperti antarmuka dan kelas, menjadikannya lebih cocok untuk aplikasi berskala besar.

## JavaScript: Dasar-Dasar
JavaScript diciptakan oleh Netscape pada tahun 1995 dan sejak itu menjadi teknologi dasar dari World Wide Web. Ini terutama digunakan untuk scripting sisi klien, tetapi juga dapat digunakan di sisi server dengan lingkungan seperti Node.js.

### Fitur Utama JavaScript
- **Bahasa yang Diinterpretasikan:** JavaScript dieksekusi baris demi baris oleh mesin JavaScript di browser.
- **Tipe Dinamis:** Variabel dalam JavaScript tidak memiliki tipe tetap dan dapat berubah tipe.
- **Fungsi Kelas Satu:** Fungsi dalam JavaScript adalah warga negara kelas satu, artinya dapat ditugaskan ke variabel, diteruskan sebagai argumen, dan dikembalikan dari fungsi lain.
- **Berbasis Peristiwa:** JavaScript bersifat berbasis peristiwa, yang berarti dapat merespons tindakan pengguna seperti klik dan penekanan tombol.

### Contoh Kode JavaScript
```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("World"));  // Output: Hello, World!
```

## TypeScript: Menambahkan Struktur ke JavaScript

TypeScript dikembangkan oleh Microsoft pada tahun 2012 untuk mengatasi keterbatasan JavaScript, terutama dalam aplikasi berskala besar. Ini memperkenalkan tipe statis, antarmuka, dan kelas, yang membantu dalam menangkap kesalahan lebih awal dalam proses pengembangan.

### Fitur Utama TypeScript

- **Tipe Statis:** TypeScript memungkinkan Anda mendefinisikan tipe untuk variabel, parameter fungsi, dan nilai kembali, yang membantu dalam menangkap kesalahan terkait tipe pada waktu kompilasi.
- **Antarmuka:** Antarmuka dalam TypeScript mendefinisikan struktur objek, memastikan bahwa mereka memiliki properti dan metode yang diperlukan.
- **Kelas:** TypeScript mendukung pemrograman berorientasi objek dengan kelas, yang dapat digunakan untuk membuat komponen yang dapat digunakan kembali.
- **Dukungan Alat:** TypeScript menyediakan dukungan alat yang sangat baik, termasuk penyelesaian kode, refactoring, dan navigasi, yang meningkatkan produktivitas pengembang.

### Contoh Kode TypeScript

```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}

let user = { firstName: "John", lastName: "Doe" };
console.log(greet(user));  // Output: Hello, John Doe!
```

## JavaScript vs. TypeScript: Kapan Menggunakan Masing-Masing

- **JavaScript:** Ideal untuk proyek kecil hingga menengah di mana pengembangan cepat sangat penting. Ini juga merupakan pilihan default untuk proyek yang tidak memerlukan fitur tambahan dari TypeScript.
- **TypeScript:** Terbaik untuk aplikasi berskala besar di mana pemeliharaan dan skalabilitas penting. Ini juga merupakan pilihan yang baik untuk proyek yang memerlukan kolaborasi di antara beberapa pengembang.

## Kesimpulan

JavaScript dan TypeScript adalah dua alat yang kuat dalam toolkit pengembang web. Sementara JavaScript penting untuk menambahkan interaktivitas ke situs web, TypeScript menyediakan fitur tambahan yang membuatnya lebih cocok untuk aplikasi berskala besar. Memahami kekuatan dan kelemahan masing-masing bahasa dapat membantu pengembang memilih alat yang tepat untuk pekerjaan tersebut.

# Tugas

## Tugas 1: Luas Persegi Panjang
- **Input:** Panjang = 5, Lebar = 3
- **Output:** Luas = 15

## Tugas 2: Properti Lingkaran
- **Input:** Jari-jari = 5
- **Output:** Diameter = 10, Keliling = 31.4159, Luas = 78.539

## Tugas 3: Sudut Segitiga
- **Input:** Sudut A = 80, Sudut B = 65
- **Output:** Sudut Ketiga = 35

## Tugas 4: Perbedaan Tanggal dalam Hari
- **Input:** Tanggal1 = 2024-03-19, Tanggal2 = 2024-03-21
- **Output:** Perbedaan dalam Hari = 2

## Tugas 5: Mencetak Inisial dalam Huruf Besar
- **Input:** Nama = John Doe
- **Output:** Inisial = JD

## Snippet Kode
### Luas Persegi Panjang
```python
def luas_persegi_panjang(panjang, lebar):
    return panjang * lebar
```

### Properti Lingkaran
```python
import math
def properti_lingkaran(jari_jari):
    diameter = 2 * jari_jari
    keliling = 2 * math.pi * jari_jari
    luas = math.pi * jari_jari ** 2
    return diameter, keliling, luas
```

### Sudut Segitiga
```python
def sudut_ketiga(a, b):
    return 180 - (a + b)
```

### Perbedaan Tanggal dalam Hari
```python
from datetime import datetime
def perbedaan_tanggal(tanggal1, tanggal2):
    format_tanggal = "%Y-%m-%d"
    t1 = datetime.strptime(tanggal1, format_tanggal)
    t2 = datetime.strptime(tanggal2, format_tanggal)
    delta = t2 - t1
    return delta.days
```

### Mencetak Inisial dalam Huruf Besar
```python
def inisial(nama):
    return ''.join([bagian[0].upper() for bagian in nama.split()])
```


## License

MIT

**Free Software, Hell Yeah!**