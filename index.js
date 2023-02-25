import { faker } from '@faker-js/faker';

let myLibrary = [];

function Book(title, author, pages, read) {
  this.id = faker.datatype.uuid();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  let readStatus = this.read ? 'finished' : 'not read yet';
  return `${this.id} ${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
};

function getNewBook() {
  let bookTitle = faker.company.name();
  let bookAuthor = faker.name.fullName();
  let bookPages = faker.datatype.number({ min: 100, max: 300 });
  let bookRead = faker.datatype.boolean();

  return new Book(bookTitle, bookAuthor, bookPages, bookRead);
}

function addBookToLibrary() {
  const newBook = getNewBook();
  myLibrary.push(newBook);
}

addBookToLibrary();

console.log(myLibrary);
