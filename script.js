// alert("ceci est un formulaire");

// if("bouton" is onclick){
//     console.log(validé)
// }

//function nomRecup() {
  //  console.log("prénom")
//}
function nomRecup() {
    let input = document.getElementById("look").value;
    const regex = /\d/;
    let found = input.match(regex);
    console.log(found);
    found ? console.log("trouvé") : console.log("pas trouvé");
    // if (found) {
    //     console.log("trouvé");
    // } else {
    //     console.log("pas trouvé");
    // }
    // console.log(found);
    
    // .value.toUpperCase();
    // let div =  document.createElement("div");
    // div.setAttribute('class', 'test');
    
    // document.body.appendChild(div);
    // div.innerHTML = input;
}


//console.log("test");

