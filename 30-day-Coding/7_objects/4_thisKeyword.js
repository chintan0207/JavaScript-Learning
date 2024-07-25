let book = {
  title: "The Trees",
  author: "Chintan Patel",
  year: 2023,
  library: { name: "Knowledge House", books: ["water", "soil", "fire"] },
  getTitleAuthor: function () {
    return `${this.title} is written by ${this.author}`;
  },
  getTitleAndYear: function () {
    return `${this.title} is written in ${this.year}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

console.log(book.getTitleAndYear());
