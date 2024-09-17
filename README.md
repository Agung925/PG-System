# Tailwind CSS Tutorial
# Struktur Folder

/tailwind_project
│
├── /dist                    # File hasil build
│   ├── /css                 # CSS yang di-minify
│   ├── /js                  # JavaScript yang di-minify
│   ├── /images              # Gambar yang dioptimasi
│   └── index.html           # HTML hasil build
│
├── /src                     # Sumber pengembangan
│   ├── /css                 # File CSS atau preprocessor
│   ├── /js                  # File JavaScript asli
│   ├── /images              # Gambar asli sebelum optimasi
│   ├── /components          # Komponen reusable
│   └── index.html           # HTML untuk pengembangan
│
├── /assets                  # Aset umum
│   ├── /fonts               # Font
│   ├── /icons               # Icon atau SVG
│
├── /node_modules            # Dependency npm
│
├── tailwind.config.js       # Konfigurasi Tailwind
├── postcss.config.js        # Konfigurasi PostCSS
├── package.json             # Dependency dan scripts npm
└── README.md                # Dokumentasi

1. npm init -y                                          # inisialisasi proyek Node.js

2. npm install tailwindcss postcss autoprefixer         # instal Tailwind CSS beserta dependensinya
    • tailwindcss: Framework utama yang akan digunakan.
    • postcss: Alat untuk mengubah CSS dengan plugin.
    • autoprefixer: Plugin PostCSS untuk menambahkan prefix vendor secara otomatis untuk kompatibilitas lintas browser.

3. npx tailwindcss init                                 # Membuat File Konfigurasi Tailwind

"dev": "npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch",
