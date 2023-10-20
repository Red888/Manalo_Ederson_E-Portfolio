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
// Cookies





function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
      document.querySelector("#cookies").style.display = "none";
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 7);
       }
    }
  }  
  
  function checkingCookie()
  {
    setTimeout(checkCookieHistory,5000);
  }
 

  function checkCookieHistory() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
      document.querySelector("#cookies").style.display = "none";
    } 
  }

  function acceptCookie()
{
    document.querySelector("#cookies").style.display = "none";
    
    checkCookie();
    setCookie(cname, true, 7);
}

function removeConsent()
{
    document.querySelector("#cookies").style.display = "none";
}



