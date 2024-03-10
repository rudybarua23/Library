const myLibrary = [];

function Book(author,title,pages) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
}


function addBookToLibrary() {
  // do stuff here
  var book = new Book(document.getElementById("author").value, document.getElementById("title").value, document.getElementById("pages").value);
  myLibrary.push(book);
  displayBooks();
  document.getElementById("bookForm").reset();
}

function displayBooks() {
    const list = document.getElementById("book-list");
    list.innerHTML = '';

    myLibrary.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-box');

        const title = document.createElement('h3');
        title.innerText = book.title;
        bookContainer.appendChild(title);

        const author = document.createElement('p');
        author.innerText = `Author: ${book.author}`;
        bookContainer.appendChild(author);

        const pages = document.createElement('p');
        pages.innerText = `Pages: ${book.pages}`;
        bookContainer.appendChild(pages);

        list.appendChild(bookContainer);

    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBookToLibrary);
});

var popupWindow = document.getElementById("plus");
var popup = document.getElementById("bookForm")
var closeButton = document.getElementById("close")
popupWindow.addEventListener('click', function(event) {
    event.preventDefault();
    popup.style.display = "block";
});
closeButton.addEventListener('click', function() {
    popup.style.display = "none";
});