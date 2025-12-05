//document.getElementById("number-of-people").innerHTML = "100";

let count = 0;
console.log(count);
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
    //console.log("The button was clicked");
    count = count +1;
    document.getElementById("number-of-people").innerText= count;
    //console.log(count);
}
function save() {
    console.log(count);
}
save()