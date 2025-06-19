// 8. Bulk Write
db.dosen.bulkWrite([
  {
    insertOne: {
      document: { nama: "Budi Santosa", nip: "197512301998021001", prodi: "Informatika", tahunMasuk: 1998 }
    }
  },
  {
    updateOne: {
      filter: { nip: "197512301998021001" },
      update: { $set: { prodi: "Teknik Komputer" } }
    }
  }
]);
