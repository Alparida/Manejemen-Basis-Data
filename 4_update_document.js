// 4. Update Document
db.dosen.updateOne(
  { nip: "198709102019032001" },
  { $set: { prodi: "Teknologi Informasi" } }
);
