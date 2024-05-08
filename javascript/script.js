let result = document.getElementById('result')
function displaySeven(){
    result.value =result.value + 7
}
function displayEight(){
    result.value= result.value +8}
function displayNine(){
    result.value = result.value +9}
function displaydivide(){
    result.value = result.value +"/"}
function displayFour(){
    result.value =result.value +4}
function displayFive(){
    result.value = result.value +5}
function displaySix(){
    result.value =result.value + 6}
function displayMultiply(){
    result.value = result.value +"*"}
function displayOne(){
    result.value = result.value +1}
function displayTwo(){
    result.value = result.value +2}
function displayThree(){
    result.value = result.value +3}
function displayMinus(){
    result.value = result.value +"-"}
function displayZero(){
    result.value =result.value + 0}
function displayDot(){
    result.value = result.value +"."}
function displayPlus(){
    result.value = result.value +"+"}
    
    
function displayequal(){
    result.value =eval(result.value)}
    function clearAll(){
        result.value = ('')
    }
   function displayDelete(){
    myValue = result.value;
    result.value = myValue.slice(0, -1);
   }