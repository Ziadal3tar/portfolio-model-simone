window.addEventListener('scroll', function () {
    if (scrollY >= 670) {
            document.getElementById('nav').classList.add("bg-green") 
    }else if(scrollY <= 670){
        document.getElementById('nav').classList.remove("bg-green") 
    }
  });
