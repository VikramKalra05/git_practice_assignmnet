// Check whether number is prime or not

let num = 10;
let factors = 0;

for(let i=0; i<=num; i++){
    if(num%i==0){
        factors++;
    }
}

if(factors=2){
    console.log("prime")
}else{
    console.log("not prime");
}