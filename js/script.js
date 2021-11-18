let navbar = document.querySelector(".navbar");
document.querySelector("#mm-btn").onclick = () =>{
  navbar.classList.toggle ("activee")
  console.log(navbar)
}
let navber = document.querySelector(".navber" ,".navbar");
document.querySelector("#m-btn").onclick = () =>{
  navber.classList.toggle ("active")
  
}






var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  let go = document.getElementById ("goku");

  go.addEventListener("click" , (go) => {
      go.target.classList.toggle("gk-on");

    })

  


  


    let sliderImg = document.querySelector(".slider-img");
    let imagens = [ "foto31.jpg" , "foto32.png",  "foto33.jpg", "foto34.jpg", "foto35.jpg", "foto36.jpg","foto47.gif", "foto48.gif" ,"foto49.gif" ,"foto52.gif" ,"foto55.gif", "foto53.gif", ];
    let i = 0 // imagem 

    function prev (){
      if (i<=0) i =imagens.length;
      i--;
return setImg()
    }

    function next (){
     if (i >= imagens.length-1) i = -1;
     i++;
      return setImg()
    }

    function setImg (){
      return sliderImg.setAttribute("src", "imagens/" + imagens [i]);
    }
    let goImagens = document.querySelector (".img-c");
    let img = [ "foto62.gif" , "foto63.gif" ,  "foto64.gif" ,   "foto65.gif" ,  "foto66.gif" , "foto70.gif", "foto71.gif", "foto72.gif", "foto73.gif" , "foto80.gif",  ];
    let goI = 0;

    function pre(){
      if (goI <=0) goI = img.length;
      goI--;
      return gImg()

    }
    function nex(){
      if (goI >= img.length-1) goI = -1;
      goI++;
      return gImg()
      
    }
    function gImg (){
     return goImagens.setAttribute("src", "imagens/" + img [goI]) 
    }