const colors= ["green","red","rgba(133,122,200)", "f15025"];
const btn= document.getElementById("btn");
const color= document.querySelector(".color");
btn.addEventListener("click", function () {
// get a random number between 0-3
 const randomnumber= getrandomnumber();
//  console.log (randomnumber);

 document.body.style.backgroundColor = colors[randomnumber];
 color.textContent = colors[randomnumber];
});


function getrandomnumber() {
    return Math.floor(Math.random() * colors.length);
   
}

