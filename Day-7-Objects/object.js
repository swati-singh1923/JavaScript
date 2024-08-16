//Activity 1:Object Creation and access

//Create an object representing a book with properties like title, author and year and log the object.

const book = {
    title : "Vedant",
    author : "Acharya Prashant",
    year : 2024
};

console.log(book);

//Access and log the title and author property of the book object and log the value to console.

book["title"];     // book.title;
book["author"];   //book.author;
console.log("Title of book:",book["title"]);
console.log("Author of book:",book.author);

/*Add a method to the book object that returns a string with the book's title and author and 
log the result of calling this method. */

let book2 = {
    title : "Women's Revolution",
    author : "Acharya Prashant",
    year : 2023,
    getValue: function(){
        console.log(`The author of ${this.title} is ${this.author}.`);
    }
};

// console.log(book2.getValue());
book2.getValue();

/*Add a method to the book object that takes a parameter(year) and update the book's year 
property and log the updates object. */

const book3 = {
    title : "Book of Myth",
    author: "Acharya Prashant",
    year : 2023,

    getValue: function(){
        console.log(`The author of ${this.title} is ${this.author}.`);
    },
    
    getYear: (year) => {
        return book3.year = year;
    }
};

console.log(book3.getYear(1998));
console.log(book3);

/*Add a method to the book object that uses the this keword to return a string with the book title 
and log the result of calling this method. */

const book4 = {
    title : "Bhagvat Geeta",
    author : "Acharya Prashant",
    year : 2018,

    getYear: function() {
        console.log(`The book title is ${this.title}, published in ${this.year}.`);
        
    }
};

book4.getYear();


