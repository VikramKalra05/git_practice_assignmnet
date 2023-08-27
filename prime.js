let num = 17;
let factors = false;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        factors = true;
        break; 
    }
}

if (factors) {
    console.log("Not prime");
} else {
    console.log("Prime");
}
