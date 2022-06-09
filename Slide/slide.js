document.addEventListener('DOMContentLoaded',function(){
    var button = document.querySelectorAll('.chuyenslide ul li'),
        slides = document.querySelectorAll('.slides ul li'),
        time = setInterval(function(){autoSlide()},5000);
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click',function(){
        //Hủy tự chuyển động
        clearInterval(time);
        for (var i = 0; i < button.length; i++) {
                button[i].classList.remove('active');
            }
            this.classList.add('active');
            //End-chuyen-slide
            var activebut = this,
                posibut = 0;
            for (posibut = 0; activebut = activebut.previousElementSibling; posibut++){}
            //Lấy stt của nút
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                slides[posibut].classList.add('active');
            }
        }); 
    }
    //Tự chuyển slide
    function autoSlide(){
        var posislide = 0,
            tenseslide = document.querySelector('.slides ul li.active');
            for (posislide = 0; tenseslide = tenseslide.previousElementSibling; posislide++){}
            if (posislide < slides.length - 1){
                for (var i = 0; i < slides.length; i++) {
                    slides[i].classList.remove('active');
                    button[i].classList.remove('active');
                }
                slides[posislide].nextElementSibling.classList.add('active');
                button[posislide].nextElementSibling.classList.add('active');
            }
            else {
                for (var i = 0; i < slides.length; i++) {
                    slides[i].classList.remove('active');
                    button[i].classList.remove('active');
                }
                slides[0].classList.add('active');
                button[0].classList.add('active');
            }   
    }
})