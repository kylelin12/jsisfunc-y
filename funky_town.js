function fib(nth) {
    if (nth <= 1)
        return 1;
    return fib(nth - 1) + fib(nth - 2);
};

function ordinalsuffix(n) {
    var i = n % 10,
        j = n % 100;
    if (i == 1 && j != 11) {
        return n + "st";
    }
    if (i == 2 && j != 12) {
        return n + "nd";
    }
    if (i == 3 && j != 13) {
        return n + "rd";
    }
    return n + "th";
};

function testfib() {
    var a;

    for (a = 0; a < 42; a++) {
        var counter = a + 1;
        console.log("The " + ordinalsuffix(counter) + " number in the fibonacci sequence is: " + fib(a));
    }
};

function gcd(a, b) {
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
};

function testgcd() {
    console.log("The GDC of 900 and 810 is: " + gcd(900, 810));
    console.log("The GDC of 4254 and 253 is: " + gcd(4254, 253));
    console.log("The GDC of 2372 and 72939 is: " + gcd(2372, 72939));
    console.log("The GDC of 2583 and 810 is: " + gcd(2583, 810));
    console.log("The GDC of 5932 and 1836 is: " + gcd(5932, 1836));
    console.log("The GDC of 8362 and 38462 is: " + gcd(8362, 38462));
};

function randomIndex(array) {

    console.log("Generating random element from: " + array);

    var ranIndex = function (array) {
        var size = array.length;
        var randI = Math.floor(Math.random() * size);
        return array[randI];
    };

    console.log("Randomly selected element: " + ranIndex(array));
};

var students = [
    "John",
    "Monte",
    "Freddy",
    "James",
    "Andre",
    "Dimitri",
    "Citron"
]

function randomStudent() {
    return randomIndex(students);
};