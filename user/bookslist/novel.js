const bookContainer = document.getElementById('book-container');
const searchInput = document.getElementById('search-input');

// Book data
const books = [
  { title: 'Book 1', author: 'Author 1', image: 'book1.jpg' },
  { title: 'Book 2', author: 'Author 2', image: 'book2.jpg' },
  { title: 'Book 3', author: 'Author 3', image: 'book3.jpg' },
  { title: 'Book 4', author: 'Author 4', image: 'book4.jpg' },
  { title: 'Book 5', author: 'Author 5', image: 'book5.jpg' },
  { title: 'Book 6', author: 'Author 6', image: 'book6.jpg' },
];

// Function to create a book card
function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = book.image;
  image.alt = book.title;

  const title = document.createElement('h2');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.textContent = `Author: ${book.author}`;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(author);

  return card;
}

// Function to filter books based on search input
function filterBooks(searchTerm) {
  const filteredBooks = books.filter(book => {
    const bookTitle = book.title.toLowerCase();
    const bookAuthor = book.author.toLowerCase();
    return bookTitle.includes(searchTerm) || bookAuthor.includes(searchTerm);
  });

  displayBooks(filteredBooks);
}

// Function to display books in the book container
function displayBooks(books) {
  bookContainer.innerHTML = '';

  books.forEach(book => {
    const card = createBookCard(book);
    bookContainer.appendChild(card);
  });
}

// Event listener for search input
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  filterBooks(searchTerm);
});

// Display all books initially
displayBooks(books);
