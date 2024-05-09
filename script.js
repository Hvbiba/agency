// set setInterval in bom takes function and time
// counter 

var Customer = document.getElementById('Customers');
var firstLabel = parseInt(Customer.innerHTML); // Parse the innerHTML to an integer
console.log(firstLabel);
var firstcounter = setInterval(function(){
    firstLabel++; 
    Customer.innerHTML = firstLabel;
    if (firstLabel === 300) {
        clearInterval(firstcounter);
    }
},180);

var Projects= document.getElementById('Projects');
var secLabel=parseInt(Projects.innerHTML);
console.log(secLabel);
var secCounter = setInterval(function(){
    secLabel++;
    Projects.innerHTML = secLabel;
    if(secLabel == 100){
        clearInterval(secCounter);
    }
},180);

var code= document.getElementById('code');
var codeLabel=parseInt(code.innerHTML);
console.log(codeLabel);
var codeCounter = setInterval(function(){
    codeLabel++;
    code.innerHTML = codeLabel;
    if(codeLabel == 400){
        clearInterval(codeCounter);
    }
},180);

var download= document.getElementById('Download');
var downloadLabel=parseInt(download.innerHTML);
console.log(downloadLabel);
var downloadCounter = setInterval(function(){
    downloadLabel++;
    download.innerHTML = downloadLabel;
    if(downloadLabel == 500){
        clearInterval(downloadCounter);
    }
},180);

// input form check
// input checker
let Name = document.getElementById('name');
let num = document.getElementById('num');
let email = document.getElementById('mail');
let btn = document.getElementById('checkBtn');
let message=document.getElementById('message');

btn.addEventListener('click', function() {
    if (Name.value === '' && num.value === '' && email.value === '' && message.value==='') {
        alert("Inputs required pleaze fill them");
        Name.classList.add('redInput');
        num.classList.add('redInput');
        email.classList.add('redInput');
        message.classList.add('redInput');    
    }
});

// slider for reveiws page
let container = document.querySelector('.commnetsContainer');
let Btn = document.querySelector('#Btn');
// set what people say about us
let comments = [
    "Impressed with the creativity and strategic approach",
    "Working with was a breeze. Clear communication, timely delivery",
    "Top-notch expertise and unparalleled dedication.helped us navigate complex challenges with ease. Couldn't be happier with the outcome",
    "Exceptional service and attention to detail.truly understands our brand and delivered outstanding solutions tailored to our needs.",
    "Professional and efficient service from start to finish. The team at went above and beyond to meet our needs. Highly recommended!",
    "Results-driven and client-focused,exceeded our expectations in every way. Their strategic insights were invaluable to our success",
    "rustworthy and professional,took the time to understand our needs and delivered personalized solutions that made a real impact.",
    "Impressed with the creativity and strategic approach",
    "Working with was a breeze. Clear communication, timely delivery"
];
Btn.addEventListener('click',function(){
    let randomIndex = Math.floor(Math.random() * comments.length);
    container.innerHTML = comments[randomIndex];
});

//count down to date

// set date
let count = new Date("dec 30, 2024 00:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = count - now;

        document.getElementById('days').innerHTML = '0';
        document.getElementById('hours').innerHTML = '0';
        document.getElementById('minutes').innerHTML = '0';
        document.getElementById('seconds').innerHTML = '0';

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

}, 500);