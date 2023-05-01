//vars
let equalButton = document.querySelector('.clear')
let inputNum1 = document.querySelector('.num-one')
let inputNum2 = document.querySelector('.num-two')
let Result = document.querySelector('.result')

//focus on input 1
inputNum1.focus()
/**            events             **/
let input1Value ,input2Value
//add event
document.body.addEventListener('click',(e)=>{
    input1Value = +inputNum1.value  // use (prefix + to )return number from string or (use parseInt fun)
    input2Value = +inputNum2.value
    if(input2Value == '' || input1Value == '' ){
        Result.value = 'invalid operation'
        if(e.target.className == 'sqrt'){
           Result.value = Math.sqrt(input1Value || input2Value)
        }
    }
    else{
        if(e.target.className == 'addition'){
           Result.value = input1Value + input2Value
        }
        else if(e.target.className == 'substraction'){
           Result.value = input1Value - input2Value
        }
        else if(e.target.className == 'multiplication'){
           Result.value = input1Value * input2Value
        }
        else if(e.target.className == 'division'){
           Result.value = input1Value / input2Value
        }
        else if(e.target.className == 'modlus'){
            if(input1Value % 2 == 0){
               Result.value = input1Value % input2Value
            }else{Result.value = input1Value}        
        }
        else if(e.target.className == 'base'){
           Result.value = input1Value ** input2Value
        }
        if(e.target.className == 'sqrt'){
            alert('should one of input be empty')
        }
        //clear button
        else if(e.target.className == 'clear'){
            inputNum1.value = ''
            inputNum2.value = ''
            Result.value = ''
        }
    }
})
