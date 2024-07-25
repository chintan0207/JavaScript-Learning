let book = {
  title: "The Trees",
  author: "Chintan Patel",
  year: 2023,
  getTitleAuthor: function () {
    return `${this.title} is written by ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};
console.log(book);
console.log(book.getTitleAuthor());
book.updateYear(2022);
console.log(book);
