const bgFixed = document.querySelector(".backgroundFixed");
 const btnMore = Array.from(document.querySelectorAll(".cards__btn"));

 const agregar = document.querySelector(".contentFixed");

 for(let loop of btnMore){
     loop.addEventListener("click", (e)=> {
         e.preventDefault();
         
         bgFixed.classList.add("activeBgFixed")

        let indice = btnMore.indexOf(e.target);
        switch(indice){
            case 0:
              agregar.innerHTML =  //html 
              `
                 <img src="img/img11.jpg" class="imgContentFixed">
                 <p class="pContentFixed">La energía eólica se ha convertido en una fuente de generación de electricidad clave para el cambio del modelo energético, más limpio y sostenible. La mejora de la tecnología permite que algunos campos eólicos produzcan energía eléctrica tan barata como lo hace el carbón o las centrales atómicas.
                 <br><br>
                 La energía eólica se ha convertido en una fuente de generación de electricidad clave para el cambio del modelo energético, más limpio y sostenible. La mejora de la tecnología permite que algunos campos eólicos produzcan energía eléctrica tan barata como lo hace el carbón o las centrales atómicas.Tiene su origen en procesos atmosféricos debidos a la radiación solar, por lo que es un recurso natural renovable que no produce emisiones atmosféricas ni contaminantes, Puede instalarse en espacios no aptos para otros fines, como zonas desérticas y además puede convivir con otros usos del suelo, como el cultivo o la ganadería.​
                 </p>
              `
            break;
            case 1:
                agregar.innerHTML = //html 
                `
                <img src="img/img7.jpg" class="imgContentFixed">
                 <p class="pContentFixed">
                    La agricultura ecológica garantiza una agricultura sana y alimentos saludables para hoy y para mañana, ya que protege el suelo, el agua y el clima, promoviendo la biodiversidad. No contamina el medio ambiente con agroquímicos ni con cultivos transgénicos, ayudando a los suelos de nuestras tierras,Para ser sostenible. 
                    <br><br>
                    la agricultura debe satisfacer las necesidades de las generaciones presentes y futuras de sus productos y servicios, garantizando al mismo tiempo la rentabilidad, la salud del medio ambiente y la equidad social y económica,Para conseguir la transición global a la alimentación y la agricultura sostenibles, es imprescindible mejorar la protección ambiental, la resiliencia de los sistemas, y la eficiencia en el uso de los recursos por consiguiente, requiere un sistema de gobernanza mundial que promueva la seguridad alimentaria en los regímenes y políticas comerciales, y que reexamine las políticas agrícolas para promover los mercados agrícolas locales y regionales.
                 </p>
                ` 
            break; 
            case 2 :
                agregar.innerHTML = //html 
                `
                  <img src="img/img22.jpg" class="imgContentFixed">
                  <p class="pContentFixed">
                    La energía solar goza de numerosos beneficios que la sitúan como una de las más prometedoras. Renovable, no contaminante y disponible en todo el planeta, contribuye al desarrollo sostenible y a la generación de empleo en las zonas en que se implanta, La energía solar también es útil para generar electricidad a gran escala.
                    <br><br>

                    La energía solar se puede captar a través de células fotoeléctricas (que conforman los paneles fotovoltaicos que todos conocemos), heliostatos o colectores solares, que posteriormente la transforman en energía solar térmica (a través de la temperatura) o energía solar fotovoltaica (a través de la luz). También puede aprovecharse de forma pasiva con técnicas de arquitectura bioclimática y sostenible,La energía solar es una de las fuentes de energías renovables más fáciles de producir, especialmente la solar fotovoltaica, lo que está haciendo que se esté extendiendo su uso en las zonas climáticas con más horas de sol. Y España no es una excepción a esta regla – aunque todavía tenemos mucho margen de mejora para seguir transformando la energía procedente de fuentes no renovables (petróleo o carbón) en proveniente de fuentes renovables. 
                 </p>
                `
            break;
            case 3: 
                agregar.innerHTML = //html 
                `
                <img src="img/img16.jpg" class="imgContentFixed">
                <p class="pContentFixed">
                    Los coches eléctricos son el futuro de la tecnología automovilística, en un mundo que empieza a ser consciente de la necesidad de apostar por la movilidad sostenible,En los últimos años, el avance y la integración de los coches eléctricos en la sociedad actual ha marcado el panorama automovilístico nacional e internacional.
                    <br><br>
                    Los automóviles eléctricos se mueven gracias a unos motores que únicamente necesitan energía eléctrica para funcionar. Aunque llevan relativamente poco tiempo entre nosotros, este modelo de coches ha avanzado a una gran velocidad, ofreciendo una serie de beneficios que no encontramos en los coches convencionales. La ausencia de emisiones en la circulación es su mayor argumento, pero ni mucho menos el único. Y es que presentan también costes de uso inferiores a los coches de combustión, beneficios fiscales, aparcamiento gratuito en la vía pública, una mayor amplitud a igualdad de tamaño exterior y hasta una conducción muy suave y agradable que añade, asimismo, aceleraciones más briosas.
                 </p>
                
                `
            break;
        }
         
     })
 }

 const closeMore = document.querySelector(".fa-times");
 closeMore.addEventListener("click", ()=>{
    bgFixed.classList.remove("activeBgFixed")
 })