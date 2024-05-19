// Declare variables
let input1 = document.getElementById('fname');
let input2 = document.getElementById('lname');
let input3 = document.getElementById('email');
let input4 = document.getElementById('age');
let input5 = document.getElementById('phone');
let input6 = document.getElementById('uname');
let input7 = document.getElementById('password');
let input8 = document.getElementById('confirm');

let btn = document.getElementById('btn');

let out1 = document.getElementById('output1');
let out2 = document.getElementById('output2');
let out3 = document.getElementById('output3');
let out4 = document.getElementById('output4');
let out5 = document.getElementById('output5');
let out6 = document.getElementById('output6');
let out7 = document.getElementById('output7');

// Create function to make use of the variables inside the HTML

function display() {
    out1.innerHTML = input1.value;
    out2.innerHTML = input2.value;
    out3.innerHTML = input3.value;
    out4.innerHTML = input4.value;
    out5.innerHTML = input5.value;
    out6.innerHTML = input6.value;
    if(input7.value === input8.value) {
        out7.innerHTML = 'Passwords match'
    } else {
        out7.innerHTML = 'Passwords do not match'
    }
}

// Add an event listener to the button

btn.addEventListener('click',display);

