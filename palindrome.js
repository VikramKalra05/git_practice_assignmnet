// check whether string is palindrome or not

let str = "naman";
let empty_str = "";

for(let i=str.length-1; i>=0; i++){
    empty_str += str[i];
}

if(str==empty_str){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}
