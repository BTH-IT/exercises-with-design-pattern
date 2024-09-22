/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

export class Book {
  title: string;
  author: string;
  publicationYear: number;

  constructor(title: string, author: string, publicationYear: number) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

export class Library {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(book: Book): void {
    this.books = this.books.filter((b) => b !== book);
  }

  getBooks(): Book[] {
    return this.books;
  }
}

export class LibraryManager {
  private library: Library;

  constructor(library: Library) {
    this.library = library;
  }

  getBookByTitle(title: string): Book | undefined {
    return this.library.getBooks().find((book) => book.title === title);
  }

  getTotalNumberOfBooks(): number {
    return this.library.getBooks().length;
  }

  getBooksByAuthor(author: string): Book[] {
    return this.library.getBooks().filter((book) => book.author === author);
  }

  getBooksByPublicationYear(publicationYear: number): Book[] {
    return this.library
      .getBooks()
      .filter((book) => book.publicationYear === publicationYear);
  }
}
