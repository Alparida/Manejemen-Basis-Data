// 7. Logical Query
db.dosen.find({
  $and: [
    { prodi: "Teknologi Informasi" },
    { tahunMasuk: { $gte: 2018 } }
  ]
});
