function isPrime(number) {
    if (number <= 1) {
        return false;  
    }

  
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
}

const num = 17;

if (isPrime(num)) {
    console.log(num + " is prime.");
} else {
    console.log(num + " is not prime.");
}
