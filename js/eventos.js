
// Slider Automatico principal
const images = document.querySelectorAll('.slider__item');
const indicador = document.querySelectorAll('.slider__circle');
let contador = 0;
images[contador].classList.add('active-slider');
indicador[contador].classList.add('active-indicadores');

function Slider(){
    images[contador].classList.remove('active-slider');
    indicador[contador].classList.remove('active-indicadores');

    if(contador != images.length-1){
        contador++;
    }else{
        contador = 0;
    }

    images[contador].classList.add('active-slider');
    indicador[contador].classList.add('active-indicadores');
    setTimeout("Slider()",12000);
}
window.onload = Slider;
// ...................................................
// ...................................................


// libreria glider js
window.addEventListener('load', ()=>{
    new Glider(document.querySelector('.carousel__principal'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: '.left',
            next: '.right'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 650,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
            }
            },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
            }
            }
        ]
      });
})

// ...................................................
// ...................................................

 




