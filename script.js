const minInput = document.querySelector('#lowLimit');
const maxInput = document.querySelector('#upLimit');
const randomNumSpan = document.querySelector('#randomNum');
const generateBtn = document.querySelector('#generateBtn');
const clearBtn = document.querySelector('#clearBtn');


 function generateRandomNum(){
    const minNum = Number(minInput.value); // to convert string numbers "567" into  numbers 567 (even it is written number in input) to Number 
    const maxNum = Number(maxInput.value); // 75, 55
    if (minNum > maxNum || minInput.value ==='' || maxInput.value === ''){
        randomNumSpan.innerHTML = 'Invalid Input'
    }
    else {
        const randomNum = Math.floor((maxNum - minNum + 1) * Math.random()) + minNum;
        randomNumSpan.innerHTML = randomNum;
    }
  
/* if (!minInput.value.isEmpty && !maxInput.value.isEmpty){
    
} */
/*     console.log('I am ' + randomNum +' years old')
    console.log(`I am ${randomNum} years old`) */

   /*  let step1 = maxNum - minNum + 1; // (75-55)+1=21
    let step2 =Math.random() * step1; // 0.9*21=18.9
    let randomNum = Math.floor(step2) + minNum //18+55=73 */
   // const randomNum = (Math.floor(Math.random()) + 1) *(maxNum - minNum);
    /* console.log(randomNum) */
}

//create clearInput function in breakout rooms


function clearInput(){
    minInput.value = '';
    maxInput.value = '';
    randomNumSpan.innerHTML = '';
}

