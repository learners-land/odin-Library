let myLibrary = [];

function Book(title, author, pages, read) {
  this.id = 'test';
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  let readStatus = this.read ? 'finished' : 'not read yet';
  return `${this.id} ${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
};

Book.prototype.toggle = function () {
  this.read = !this.read;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(title) {
  myLibrary = myLibrary.filter(function (obj) {
    return obj.title !== title;
  });
}
