const GenerateQuote = async () =>{
    var url="https://type.fit/api/quotes";

    const response=await fetch(url);
    const Quote_list = await response.json();
    const randomIdx = Math.floor(Math.random()*Quote_list.length);
    const quoteText=Quote_list[randomIdx].text;
    const auth=Quote_list[randomIdx].author;
    
    if(!auth) auth = "Anonymous";
    document.getElementById("quoted").innerHTML= "'' " + quoteText + " ''";
    document.getElementById("author").innerHTML="- "+auth;
 }
 GenerateQuote();

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerButtom = window.innerHeight / 5  * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerButtom) { 
            box.classList.add('showup');
        } else {
            box.classList.remove('showup');
        }
    });
}
  
  
  
  