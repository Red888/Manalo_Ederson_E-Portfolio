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

//scroll effect

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddemElements = document.querySelectorAll('.hideElements');
hiddemElements.forEach((el) => observer.observe(el));  

/*

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('animate');
        } else {
            sec.classList.remove('animate');
        }
    })
}
*/
  
  