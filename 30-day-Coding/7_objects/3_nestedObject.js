let book = {
  title: "The Trees",
  author: "Chintan Patel",
  year: 2023,
  library: { name: "Knowledge House", books: ["water", "soil", "fire"] },
  getTitleAuthor: function () {
    return `${this.title} is written by ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

console.log(book.library);
console.log(book.library.name);
book.library.books.forEach((element) => {
  console.log(element);
});
console.log(book.library.books[0]);
