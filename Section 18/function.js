const myMath = {
  PI: 3.14959,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};

const buku = [
  {
    nama: "Harry Potter",
    rating: 9.8,
  },
  {
    nama: "Percy Jackson",
    rating: 10,
  },
  {
    nama: "LOTR",
    rating: 8,
  },
];

for (let novel of buku) {
  console.log(`${novel.nama} memiliki rating ${novel.rating}`);
}

const rating_film = buku.map((film) =>
 film.rating.toString()
)
