

export const author = {

  fullname: "Bob Alice",

  books: ["A", "B", "C"],

  printBooks() {

    this.books.forEach(book => console.log(book + " by " + this.fullname));

  }

};
