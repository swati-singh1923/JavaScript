//Nested Objects

/*Create a nested object representing a library with properties like name and books(an array 
of book objects) and log the library object to the console. */

const library = {
    name: {
        libraryName : "Aradhya library",
        collection : "Spiritual and Science Research etc.",
        location : "Prayagraj"
    },
    books :{
        book : [{
            title : "karma",
            author : "Acharya Prashant",
            year : 2020,
            pages : 144
        },
        {
           title : "Myth",
           author : "Acharya Prashant",
           year : 2019,
           pages : 200
        },
        ],
    }
}

console.log(library);

//Access and log the name of the library and the titles of all books in the library.

console.log(library["name"]);

console.log(library.name["libraryName"]);

console.log(library.books.book);

console.log(Object.keys(library.books));

library.books.book.forEach(element => {
    console.log(element.title);
    
});






//The this keyword: this keyword refers to an object that is executing the current piece of code. 

const student = {
    name : "Aman",
    id : 101,
    department : "CSE",
    property : this,
    marks : "9.5 cgpa",

    getName : function() {                            
        console.log(`Student name is ${this.name}`);
    },

    getMarks: () => {                                  
        console.log(`Marks is ${this.marks}`);
    }
}

//console.log(student.getName());
student.getName();     //Student name is Aman

student.getMarks();   //Marks is undefined
//this keyword scope is parent's scope which is window object













