// node js color: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

//This is a list of available colours (both background and foreground) in the console with some available actions (like reset, reverse, etc).

const colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};

console.log('\x1b[36m%s\x1b[0m', 'I am cyan');

// emoji picker -> windows + .
console.log("test emoji🤩");

console.group("my group"); 
    console.log("first item"); 
    console.log("second item"); 
    console.log("thrid item"); 
console.groupEnd();

const mhs = [
    {
        nama: "fatah", 
        nim: 1803015235
    }, 
    {
        nama: "ria", 
        nim: 1803042
    }
]

console.table(mhs);