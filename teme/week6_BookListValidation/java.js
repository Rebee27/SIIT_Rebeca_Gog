//1. Consider the following books as the default items of the book list:

var books = [{
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    isRead: false
},
{
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    isRead: true
},
{
    title: "JavaScript for Kids: A Playful Introduction to Programming",
    author: "Nick Morgan",
    isRead: true
}
]

//2. Display the default book list

window.addEventListener('load', function () {
    var bookListSection = document.getElementById("bookList");
    var bookList = document.createElement("ul");
    bookListSection.appendChild(bookList);
    for (var i = 0; i < books.length; i++) {
        displayBook(books[i], bookList);
    }
    var button = document.getElementById("addNewBook");
    addNewBook.onclick = function () {

        var titleInput = document.getElementsByName("title")[0];
        var authorInput = document.getElementsByName("author")[0];
        var newBook = { title: titleInput.value, author: authorInput.value, isRead: false }

        var titleError = document.createElement("p");
        titleError.setAttribute("class", "error");

        var authorError = document.createElement("p");
        authorError.setAttribute("class", "error");

        var error = document.createElement("p");
        error.setAttribute("class", "error");

        var duplicateError = document.createElement("p");
        duplicateError.setAttribute("class", "error");

        var alert = document.getElementById("alert");

        books.push(newBook);

        //2,3. validate that the title and author fields have values before adding a new book and display errors if one field or all of them are not completed- hint: check if the title and the author is different from an empty string

        if (titleInput.value == "" && authorInput.value == "") {
            error.innerText = "You must enter title and author!";
            alert.appendChild(error);
        } else
            if (titleInput.value == "") {
                titleError.innerText = "You must enter a title!";
                alert.appendChild(titleError);
            }
            else if (authorInput.value == "") {
                authorError.innerText = "You must enter an author!";
                alert.appendChild(authorError);
            }


            //validate duplicate items, if the book already exist in the list (has the same name and author)
            // display an error, also hide this error when the input's value change


            else if (titleInput.value == document.getElementsByName("p") && authorInput.value == document.getElementsByName("p")) {
                duplicateError.innerText = "This book already exists in the list!";
                alert.appendChild(duplicateError);
            }
            else {
                displayBook(newBook, bookList);
            }


        //1. reset the form after adding an item - hint: use reset() method on the form
        document.getElementById("form").reset();

    }
}
);


//4. remove the errors, after the input has value 
//hint: use "keypress" event listener on inputs. when the key is pressed hide the errors

window.addEventListener('keypress', function () {
    document.getElementsByClassName("error").style.display = "none";
});




// 3. Add the functionality to add a new book to the list, using the given form, by default a new book in unread.
function displayBook(book, list) {
    var listItem = document.createElement("li");
    var bookTitle = document.createElement("p");
    var bookAuthor = document.createElement("p");
    var isRead = document.createElement("input");
    var isReadLabel = document.createElement("label");
    isRead.setAttribute("type", "checkbox");

    bookTitle.innerText = "Title:" + book.title;
    bookAuthor.innerText = "Author:" + book.author;
    isReadLabel.innerText = "Already read";
    isRead.checked = book.isRead;

    listItem.append(bookTitle, bookAuthor, isRead, isReadLabel);
    list.appendChild(listItem);
};


