//7-multi_c.js
const x = parseInt(process.argv[2]);

if (isNaN(x)) {
    console.log("Missing number of occurences");
    } else {
        let i = 0;
        while (i < x) {
            console.log("C is fun");
            i++;
        }
    }