function calculator(num1,num2,operator){
    let blnValidation = true;
    let strMessage = '';
    if(isNaN(num1)){
        blnValidation = false;
        strMessage = 'first argument must be a number';
    }
    if(isNaN(num2)){
        blnValidation = false;
        if(strMessage){
            strMessage += ', ';
        }
        strMessage += 'second argument must be a number';
    }
    switch(operator){
        case '%':
        case '/':
        case '+':
        case '-':
        case '*':
        break;
        default:
            blnValidation = false;
            if(strMessage){
                strMessage +=', ';
            }
            strMessage += 'third argument must be a valid operator';
        break;
    }
    if(blnValidation){
        switch(operator){
            case '%':
                res= num1 % num2;
            break;
            case '/':
                res= num1 / num2;
            break;
            case '+':
                res= num1 + num2;
            break;
            case '-':
                res= num1 - num2;
            break;
            case '*':
                res= num1 * num2;
            break;
        }
        strMessage = num1 + ' ' + operator +' '+ num2 + '=' + res ;
    }
return strMessage;
}
    
console.log(calculator(10,10,'+'));
console.log(calculator(10,10,'/'));
console.log(calculator(10,10,'%'));
console.log(calculator(10,10,'*'));
console.log(calculator(10,10,'-'));
console.log(calculator(10,10,'o'));
console.log(calculator(10,'a','o'));