//Roman numbers
const button = document.getElementById('submit');
const input = document.getElementById('arabic');
const roman = document.getElementById('roman');
const error = document.querySelector('#e')
let arabicNumber = '';


input.onkeypress = function(e){
  if (e.keyCode == 13){
    e.preventDefault()
    arabicNumber = input.value;
    romanNumbersConverter();
input.value = ''
  }
  }

button.onclick = function(){
  arabicNumber = input.value;
  romanNumbersConverter();
  input.value = ''
}

function romanNumbersConverter(){

  if(isNaN(arabicNumber)){

  error.innerHTML = 'I asked for a number, not gibberish!';
  error.className = ('error');

} else if(input.value == ''){
  error.innerHTML ='Please enter the number first!';
  error.className = ('error');
} else if(arabicNumber<1 || arabicNumber> 10000){
  error.innerHTML ='Only numbers 1 -10000, sorry';
  error.className = ('error');
}

 else {
    error.innerHTML = ''
    error.className = ('error2')
  arabicChanger();
  }}

//arabic to roman logic
function arabicChanger(){

  let romanNumber="";

//1-10 000
  const romanArray = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
                    "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C",
                    "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M",
                     "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM","MMMMMMMMM",
                    "MMMMMMMMMM", "MMMMMMMMMM" ]

  let l = arabicNumber.length; //(1,2,3,4,5)

//loop through the number
for(let i = 0; i < l; i++ ){

  //get an actual number from the position
  let splittedNumber = arabicNumber.toString().split('').reverse();
  let number = parseInt(splittedNumber[i]);//actual number as a number

  if(number == 0){
  continue;
  }

romanNumber =  (romanArray[(number + (i*10)) -1]) + romanNumber;
}
  //output
  roman.innerHTML = 'In Roman days '  + arabicNumber + ' would have been ' + '<span class="fontChange">' + romanNumber + '</span>';
}

//footer

let date = new Date().getFullYear();

document.getElementById('year').innerHTML = date;
