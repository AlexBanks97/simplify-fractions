// Date started:    15th June, 2017
// Date completed:  15th June, 2017

const num = process.argv[2];
const den = process.argv[3];

var simplyfy = function(numerator, denominator) {
    console.log("Fraction: " + numerator + "/" + denominator);
    numerator = (numerator / denominator) * 100;
    console.log("Decimal of fraction: " + numerator/100);
    denominator = 100;
    var divisor = gcd(numerator, denominator);
    console.log("GCD: " + divisor);
    numerator = numerator / divisor;
    denominator = denominator / divisor;
    console.log("Simplified fraction: " + numerator + "/" + denominator);
}

var gcd = function(a, b) {
    while(b != 0) {
        var tmp = a;
        a = b;
        b = tmp % b;
    }
    return a;
}

simplyfy(num, den);