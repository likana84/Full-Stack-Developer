//document.getElementById("number-of-people").innerHTML = "100";

let countEl = document.getElementById("number-of-people");
let saveEl = document.getElementById("save-el");

//console.log("Jesus")
let count = 0;
console.log(count);
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


function increment() {
    //console.log("The button was clicked");
    count += 1;
    countEl.innerText= count;
    //console.log(count);
}
function save() {
    //create a variable that contains both the count and the dash separator 
    let countStr = count +  "-";
    //Render the variable in the saveEl using innerText
    saveEl.innerText += countStr;

   //console.log(count);
}
save()