// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

const books = [
    {
        title: 'the great wall',
        author: 'heyman F',
        year: 3453
    },
    {
        title: 'the wall of the dead',
        author: 'scoot bay',
        year: 1960
    },
    {
        title: 'who are you',
        author: 'George J K',
        year: 1813
    },

]
function logTitles(titles) {
    titles.sort();
    console.log(titles.join(","));
}

function extraTitles(books, callback) {
    const titles = books.map((book) => book.title)
    callback(titles)
}

extraTitles(books, logTitles);