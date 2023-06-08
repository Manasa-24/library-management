
class Book {
  constructor(title, author, subject, publishDate, image) {
    this.title = title;
    this.author = author;
    this.subject = subject;
    this.publishDate = publishDate;
    this.image = image;
  }
}

// Sample book data
const books = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "Novel", "10-04-1925", "great.jpg"),
  new Book("Harry Potter", "J.K.Rowling", "Novel", "26-06-1997", "harry.jpg"),
  new Book("Data Structures", "Amitava Nag", "Programming", "01-01-2011.", "ds.jpg"),
  new Book("Java", "Herbert Schildt", "Programming", "21-11-2018", "java11.jpg"),
  new Book("It Ends with Us", "Colleen Hoover", "Novel", "29-02-2016", "ends.jpg"),
  new Book("Pride and Prejudice", "Jane Austen", "Novel", "28-01-1813", "pride.jpg"),
  new Book("Python", "Magnus Lie Hetland", "Programming", "2005", "python.jpg"),
  new Book("The Lord of the Rings", "J.R.R.Tolkien", "Novel", "29-07-1954", "rings.jpg"),
  new Book("A Tale of Two Cities", "Charles Dickens", "Novel", "26-11-1859", "tale.jpg"),
  new Book("Wings of Fire", "A.P.J.Abdul Kalam,", "Autobiography", "1999", "wings.jpg"),
];

// Function to display book cards
function displayBookCards() {
  const bookContainer = document.getElementById("book-container");

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookImage = document.createElement("img");
    bookImage.classList.add("book-image");
    bookImage.src = book.image;
    bookCard.appendChild(bookImage);

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = "Author: " + book.author;
    bookCard.appendChild(bookAuthor);

    const bookSubject = document.createElement("p");
    bookSubject.classList.add("book-subject");
    bookSubject.textContent = "Subject: " + book.subject;
    bookCard.appendChild(bookSubject);

    const publishDate = document.createElement("p");
    publishDate.classList.add("book-publish-date");
    publishDate.textContent = "Publish Date: " + book.publishDate;
    bookCard.appendChild(publishDate);

    bookContainer.appendChild(bookCard);
  });
}

// Call the function to display book cards
displayBookCards();

// Function to perform search
function performSearch() {
  const searchInput = prompt("Enter a book title to search:");

  if (searchInput) {
    const bookCards = document.querySelectorAll(".book-card");

    bookCards.forEach((bookCard) => {
      const title = bookCard.querySelector(".book-title").textContent.toLowerCase();

      if (title.includes(searchInput.toLowerCase())) {
        bookCard.style.display = "block";
      } else {
        bookCard.style.display = "none";
      }
    });
  }
}

// Search button click event handler
const searchButton = document.getElementById("search");
searchButton.addEventListener("click", performSearch);
