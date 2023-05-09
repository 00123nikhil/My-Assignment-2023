// type conversion
const str = '343'
const str1 = 'You are fired...'

function convertToNumber() {
    const num = Number(str);

    try {
        if (isNaN(num)) {
            throw new Error('Invalid number');
        }
        return num;
    } catch (error) {
        return error.message;
    }
}

console.log(convertToNumber(str));