const points = document.getElementById("points");
const checkbox = document.getElementById("checkbox");
const quote = document.getElementById("quote");
const numberlabel = document.getElementById("numberlabel");

//we create an array with all the letters
const alphabet="AEIOUYBCDFGHJKLMNPQRSTVWXZ";

//points.value is the number inside the points slider
const number = points.value;
numberlabel.innerText=points.value;

// initial call
generatename(number);

points.addEventListener("click",() => {
    numberlabel.innerText=points.value;
});
//=> arrow function expression is a compact alternative to a traditional function expression



function generatename(number){
    const name =[];
    for (var i = 0; i < number; i++) {
            name[i] = generateRandomLetter()    
       }
    

    quote.innerText=name.join(""); 
    // join("") shows the array as a string with empty spaces in between instead of commas
    
}

function generateRandomLetter() {
    //with checkbox.checked we chose between consonants or the full alphabet
    if(checkbox.checked){
        const sector = alphabet.slice();
        return sector[Math.floor(Math.random() * sector.length)]
    }
    else{
        const sector = alphabet.slice(6,);
        return sector[Math.floor(Math.random() * sector.length)]
    }
    //Math.random() generate a random number between 0 and 1
    //random*lenght is a distribution between 0*26 letters and 1*26 letters
    //Math.floor round the integer so we can use it as an address for the alphabet array
    //return sector[Math.floor(Math.random() * sector.length)]

}

function copyname() {
    //Copy the text inside the quote field 
    navigator.clipboard.writeText(quote.innerText);

    /* Alert the copied text */
    //alert("Copied the text: " + quote.innerText);
}
