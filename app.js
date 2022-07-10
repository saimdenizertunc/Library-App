// Book Class: Represents a Book
class Book{
    constructor(title,author,page){
        this.title = title;
        this.author = author;
        this.pages = page;
    }
}
// UI Class: Handle UI Tasks
class UI {
    static displayBooks(){
        const StoredBooks = [
           
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');
        
        const row = document.createElement('tr');
        
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Read
  </label></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();

        }

    }

    static clearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#pages').value='';

    }
}
// Store Class: Handles Storage

// Event: Display Books

document.addEventListener('DOMContentLoaded',UI.displayBooks);

// Event: Add a Book

document.querySelector('#book-form').addEventListener('submit',(e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    // Validate
    if(title === '' || author === '' || pages === ''){
        alert('Please fill in all fields');
    } else{
    
    // Instatiate book
    const book = new Book(title, author, pages);

    // Add Book to UI
    UI.addBookToList(book);

    // Clear fields
    UI.clearFields();

    }

    


});

// Event: Remove a Book

document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deleteBook(e.target)
})