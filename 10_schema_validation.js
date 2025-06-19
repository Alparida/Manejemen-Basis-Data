// 10. Schema Validation
db.createCollection("dosen_valid", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "nip", "prodi", "tahunMasuk"],
      properties: {
        nama: { bsonType: "string" },
        nip: { bsonType: "string" },
        prodi: { bsonType: "string" },
        tahunMasuk: { bsonType: "int" }
      }
    }
  }
});
