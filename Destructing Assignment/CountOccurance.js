function CountAllWords(str) {
    const CWords = str.toLowerCase().split(' ');

    const wordCounts = {};

    for (const word of CWords) {
        if (wordCounts.hasOwnProperty(word)) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }

    return new Map(Object.entries(wordCounts));
}

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, odio eu ullamcorper suscipit, velit magna euismod nunc, sit amet sagittis ex nisl in odio.";

const wordCounts = CountAllWords(text);

console.log(wordCounts);

