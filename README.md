# EzyAPI - Dashboard

## 🌟 **Apa Itu EzyAPI?**
EzyAPI adalah platform API yang mudah digunakan dengan pendekatan yang santai namun tetap fungsional. Dibangun dengan teknologi modern, EzyAPI bertujuan untuk menyederhanakan interaksi dengan model AI canggih seperti Claude, GPT, dan Gemini.

> Catatan: API ini masih dalam tahap pengembangan karena, ya... adminnya sedang *mager* untuk ngoding. Jadi, harap nikmati humor placeholder kami sambil menunggu pembaruan. 😅

---

## 🚀 **Fitur**
- [ ] **Endpoint Model AI**: Menyediakan rute spesifik untuk berbagai model AI, seperti:
  - [ ] Claude-3-Haiku
  - [ ] GPT-4o-Mini
  - [ ] GPT-4o
  - [ ] Gemini-1.5-Flash
- [ ] **Endpoint Download Universal**: Menyediakan berbagai tools untuk mengunduh konten dari berbagai platform sosial media, seperti:
  - [ ] Facebook
  - [ ] Instagram
  - [ ] Youtube
  - [ ] X
  - [ ] Threads
- [ ] **Endpoint Upload File**: Menyediakan tempat untuk anda yang ingin menyimpan file untuk berbagai keperluan (file akan di tersimpan selama 24 jam).
- [x] **Dashboard Counter**:
  - [x] Total Endpoint Tersedia
  - [x] Endpoint Aktif
  - [x] Jumlah Pengunjung
  - [x] Total Permintaan API
- [x] **Sederhana dan Skalabel**: Dibangun dengan teknologi canggih untuk kemudahan implementasi dan skalabilitas.

---

## 🛠️ **Teknologi yang Digunakan**
### **Frontend**
- **Next.js 14.2.21**  
- **Typescript**  
- **TailwindCSS**  

### **Backend**
- **DenoJS**  
- **HonoJS**  
- **Xata ORM**  
- **Typescript**

---

## 📚 **Cara Menggunakan EzyAPI?**
### Base URL:
```
https://api.sideid.tech/api/v1/
```

### Endpoints:
#### Model AI
- Claude-3-Haiku: `/v1/ai/claude-3-haiku`
- GPT-4o-Mini: `/v1/ai/gpt-4o-mini`
- GPT-4o: `/v1/ai/gpt-4o`
- Gemini-1.5-Flash: `/v1/ai/gemini-1.5-flash`

### Contoh Permintaan:
```bash
curl -X POST https://api.sideid.tech/api/v1/ai/claude-3-haiku \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Tuliskan haiku tentang langit"}'
```

### Contoh Respon:
```json
{
  "model": "claude-3-haiku",
  "result": "Langit biru terang,\nAwan menari berbisik,\nMalam sabar menanti."
}
```

---

## 🚧 **Status Pengembangan**
### Mengapa EzyAPI belum sepenuhnya berfungsi?
- **Alasan #1**: Admin sedang dalam fase *mager* (malassss gerak). 🛋️
- **Alasan #2**: Menunda dengan kreatif adalah seni. 🎨

Mohon bersabar karena kami perlahan namun pasti mengerjakan EzyAPI agar menjadi platform API paling keren yang pernah Anda gunakan. Sementara itu, nikmati saja alasan malas kami. 😜

---

## 🛡️ **Lisensi**
Proyek ini dilisensikan di bawah MIT License. Silakan fork, kontribusi, atau sekadar melihat-lihat kode sambil menunggu pembaruan.

---

## 💌 **Kontak**
Untuk pertanyaan, saran, atau sekadar menyapa:
- **Email**: gd6037036@gmail.com
- **Instagram**: [@side__id](https://www.instagram.com/side__id)

Tetap ikuti pembaruan, dan ingat: ngoding itu menyenangkan saat Anda tidak malas! 😎

