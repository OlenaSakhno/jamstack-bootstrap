function drinkOrder(size,drink){
    strMessage = 'You have ordered a ' + size 
    switch(drink){
        case 'cola':
            strMessage+= 'Cola';
        break;
        case 'lemon':
            strMessage+= 'lemon';
        break;
        case 'orange':
            strMessage+= 'orange';
        break;
        default:
            strMessage = 'You have ordered a drink we don\'t sell  ' ;
        break;
    }

   if(size !='large' && size != 'medium' && size!= 'small'){
    strMessage = "You have ordered a size we don\'t sell "
   } 
    return strMessage;
};
let order1 = drinkOrder ('small', 'cola');
console.log(order1);
let order2 = drinkOrder ('medium', 'lemon');
console.log(order2);
let order3 = drinkOrder ('large', 'orange');
console.log(order3);
let order4 = drinkOrder ('hige', 'orange');
console.log(order4);
let order5 = drinkOrder ('small', 'apple');
console.log(order5);
