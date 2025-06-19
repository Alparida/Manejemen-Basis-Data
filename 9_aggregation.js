// 9. Aggregation
db.dosen.aggregate([
  {
    $group: {
      _id: "$prodi",
      total: { $sum: 1 }
    }
  }
]);
