// Declara un arreglo vacío para almacenar los libros
let books = [];

// Función para agregar un libro
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        books.push(book); // Agrega el libro al arreglo
        showBooks(); // Muestra los libros
        clearInputs(); // Limpia los campos de entrada
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Función para mostrar los libros en la página
function showBooks() {
    const booksContainer = document.getElementById('books');
    booksContainer.innerHTML = ''; // Limpia el contenido anterior

    books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <h3>${book.name}</h3>
            <p><strong>Author:</strong> ${book.authorName}</p>
            <p><strong>Description:</strong> ${book.bookDescription}</p>
            <p><strong>Pages:</strong> ${book.pagesNumber}</p>
            <button onclick="deleteBook(${index})">Delete</button>
        `;
        booksContainer.appendChild(bookElement);
    });
}

// Función para eliminar un libro por su índice
function deleteBook(index) {
    books.splice(index, 1); // Elimina el libro del arreglo
    showBooks(); // Actualiza la lista de libros
}

// Función para limpiar los campos de entrada
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// Función para mostrar los detalles de los libros en el sistema de gestión
function showbooks() {
    const booksDiv = books.map((book, index) => `
        <h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name:</strong> ${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
    `);
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Función para limpiar los campos de entrada del formulario
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
