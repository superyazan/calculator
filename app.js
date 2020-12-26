function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function devide(a,b){
    if (b==0){
        return 'error';
    }
    return a/b
}
function modulus(a,b){
    return a % b
}
function expo(a,b){
    return a**b
}
function operate(o,a,b){
    if (o === '+') {
       return add(a,b)
    }
    if (o === '%') {
        return modulus(a,b)
    }
    if (o === '**') {
        return expo(a,b)
     }
    else if (o === '-'){
       return subtract(a,b)
    }
    else if (o ==='*') {
       return multiply(a,b)
    }
    else if (o ==='/') {
      return  devide(a,b)
    }
    else return 'wrong operator';
}
const display = document.getElementById('display');
const calc = document.getElementById('calc-operation');
const container = document.getElementById('container');
//container.addEventListener('click',() => calc.innerHTML = `${calc.dataset.first} ${calc.dataset.operator} ${calc.dataset.second}`)
container.addEventListener('click',dplay)
function dplay(e){
    if (e.target.matches('.button')) {   
        if (e.target.classList.contains('no')){
            if (calc.dataset.second === "" || display.className != 'dis' ){
                calc.dataset.second = e.target.textContent;
               // calc.dataset.second = display.textContent
                calc.innerHTML = `${calc.dataset.first} ${calc.dataset.operator} ${calc.dataset.second}`
                display.className = 'dis'
            }
            else{
                calc.dataset.second += e.target.textContent ;
                //calc.dataset.second = display.textContent
                calc.innerHTML = `${calc.dataset.first} ${calc.dataset.operator} ${calc.dataset.second}`

            }
        }

        else if (e.target.id == 'dot'){
            if(!calc.dataset.second.includes('.')){
                calc.dataset.second += '.'
                calc.innerHTML = `${calc.dataset.first} ${calc.dataset.operator} ${calc.dataset.second}`
            }
        }
        else if(e.target.id == 'clear'){
            calc.dataset.second = '';
            calc.dataset.first = '';  
            calc.dataset.operator = ''
            calc.innerHTML = `${calc.dataset.first} ${calc.dataset.operator} ${calc.dataset.second}`
            display.className = 'dis'
            display.textContent = '0'
           }
        else if(e.target.id == 'equal'){
            if(calc.dataset.first){
                display.textContent = Math.round(operate(calc.dataset.operator,parseFloat(calc.dataset.first) , parseFloat(calc.dataset.second))*100)/100
            }  
            calc.innerHTML = `${calc.dataset.first} ${calc.dataset.operator} ${calc.dataset.second}`
            display.className = 'cl'
            calc.dataset.second = display.textContent;
            //calc.dataset.first = '';  
        }

        else if (e.target.classList.contains('operator')) {
            //calc.innerHTML = `${calc.dataset.first} ${e.target.id} ${calc.dataset.second}`
            if(calc.dataset.first && display.className == 'dis' ){
                display.textContent = Math.round(operate(calc.dataset.operator,parseFloat(calc.dataset.first) , parseFloat(calc.dataset.second))*100)/100
                calc.dataset.second = display.textContent
            }
            calc.innerHTML = `  ${calc.dataset.second} ${e.target.id}`
            calc.dataset.first = calc.dataset.second
            calc.dataset.operator = e.target.id
            display.className = 'cl'

        }
      }

}