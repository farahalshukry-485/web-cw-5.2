let menu = prompt( "الرجاء  كتابه رقم الطلب")
switch(menu) {
    case "1":
      console.log( " Your order is pink pasta")
      break;
    case "2":
      console.log( " Your order is burger")
      break;
      case "3":
        console.log( "Your order is pizza")
        break;
        default:
     console.log( " sorry this dish is not avilable")
}


let first_number = parseInt(prompt( " first number")) 
let second_number= prompt( " second number")
let operation = prompt(" ( * + - /) ")

switch(operation) {
    case "+":
      console.log(first_number+second_number)
      break;
    case "-":
      console.log( first_number-second_number)
      break;
      case"*":
        console.log(first_number*second_number)
        break;
        case"/":
        console.log(first_number/second_number)
        break;
        default:
     console.log( " wrong operation")
}

let age = parseInt(prompt( " Enter your age")) 

if ( age >=4 ) { 
    console.log( " في الروضه")
}
if (age >=6) {
    console.log( " في المدرسه")
}
if (age>=16) {
    console.log( " في الثانويه")
}
if (age>=18) {
    console.log( " في الجامعه ")
}