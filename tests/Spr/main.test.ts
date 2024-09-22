import { Book, Library, LibraryManager } from '../../Solid/1.Srp/main';

describe('Book', () => {
  it('should create a book with the given title, author, and publication year', () => {
    const book = new Book('Clean Code', 'Edric Cao', 2023);
    expect(book.title).toBe('Clean Code');
    expect(book.author).toBe('Edric Cao');
    expect(book.publicationYear).toBe(2023);
  });
});

describe('Library', () => {
  let library: Library;
  let book1: Book;
  let book2: Book;

  beforeEach(() => {
    library = new Library();
    book1 = new Book('Clean Code', 'Edric Cao', 2023);
    book2 = new Book('Design Pattern', 'Edric Cao', 2022);
  });

  it('should add books to the library', () => {
    library.addBook(book1);
    library.addBook(book2);
    expect(library.getBooks()).toContain(book1);
    expect(library.getBooks()).toContain(book2);
  });

  it('should remove a book from the library', () => {
    library.addBook(book1);
    library.addBook(book2);
    library.removeBook(book1);
    expect(library.getBooks()).not.toContain(book1);
    expect(library.getBooks()).toContain(book2);
  });

  it('should return all books in the library', () => {
    library.addBook(book1);
    library.addBook(book2);
    expect(library.getBooks()).toEqual([book1, book2]);
  });
});

describe('LibraryManager', () => {
  let library: Library;
  let libraryManager: LibraryManager;
  let book1: Book;
  let book2: Book;

  beforeEach(() => {
    library = new Library();
    libraryManager = new LibraryManager(library);
    book1 = new Book('Clean Code', 'Edric Cao', 2023);
    book2 = new Book('Design Pattern', 'Edric Cao', 2022);
    library.addBook(book1);
    library.addBook(book2);
  });

  it('should find a book by title', () => {
    const foundBook = libraryManager.getBookByTitle('Clean Code');
    expect(foundBook).toEqual(book1);
  });

  it('should return undefined if a book is not found by title', () => {
    const foundBook = libraryManager.getBookByTitle('Non-Existing Title');
    expect(foundBook).toBeUndefined();
  });

  it('should return the total number of books', () => {
    expect(libraryManager.getTotalNumberOfBooks()).toBe(2);
  });

  it('should return books by a specific author', () => {
    const booksByAuthor = libraryManager.getBooksByAuthor('Edric Cao');
    expect(booksByAuthor).toEqual([book1, book2]);
  });

  it('should return books by a specific publication year', () => {
    const booksByYear = libraryManager.getBooksByPublicationYear(2023);
    expect(booksByYear).toEqual([book1]);
  });
});
