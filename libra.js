// An aaray of books repping a library
const library = ['Rich dad Poor dad', ' Gifted Hands',
' Atomic Habits', ' Business Intelligence for Dummies', 
' Don\'t give a fuck', ' Psychology of money',
 ' How to talk to any one', ' Mindset', 
 ' How to be a Stoic', ' Think and Grow Rich' 
]

console.log("The books available in the library: " + library);

// Function to add new book==========================>
function addBook(){
    const new_1 = '48 laws of Power', new_2 = 'Things fall Appart'
  const addBook = console.log("We added to new books: " + library.push('48 laws of Power', 'Things fall Appart' ));   
}
console.log();

addBook();
console.log(library);

// Function to add new book========================> 
function delBook(){
    const delBook = console.log(library.pop());   
}
delBook();
console.log(library);

// Function to get a book========================> 
function getAnyBook(){
    const getAnyBook = library.find(library => library === ' Atomic Habits');
    console.log(`You collected: ${getAnyBook}`);
    

}
getAnyBook();
// console.log(getAnyBook);

// Function to get a book index========================> 
function getBookByIndex(){
    const bookIndex = library.findIndex(library => library === 'Rich dad Poor dad')
    return bookIndex
}
console.log(getBookByIndex());
