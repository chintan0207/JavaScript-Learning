const book = {
  title: "The Hero",
  author: "Mukesh Mehta",
  year: 2010,
};

for (const key in book) {
  console.log(key, book[key]);
}

console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book));
