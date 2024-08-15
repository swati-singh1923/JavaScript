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
        }],
    }
}

//console.log(library);
console.log(library.name["libraryName"]);



