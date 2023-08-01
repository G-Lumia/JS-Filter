document.addEventListener('DOMContentLoaded', function() {
    //IMAGE LOADER
    
    const imgInput = document.getElementById('imgInput');
    const loadImage = document.getElementById('loadImage');
    const previewImage = document.getElementById('previewImage');
    
    loadImage.addEventListener('click' , function() {
        imgInput.click();
    });

    previewImage.addEventListener('click' , function() {
        imgInput.click();
    });
    
    imgInput.addEventListener('change' , function(){
    
        const image = imgInput.files[0];
    
        if (image && image.type.startsWith('image')) {
    
            const reader = new FileReader();
    
            reader.onload = function(event) {
                const previewImage = document.getElementById('previewImage');
                previewImage.src = event.target.result;
                previewImage.classList.remove('d-none');
                loadImage.classList.add('d-none');
            };
    
            reader.readAsDataURL(image);
        }
        else{
             alert('Seleziona un\'immagine valida.');
            fileInput.value = '';
        }
    })
    
    //BUTTONS AND SLIDERS
    
    const filterButtons = document.querySelectorAll('.filter-button');
    const filterSliders = document.querySelectorAll('.filter-slider');
    const filteredImage = document.getElementById('previewImage');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', handleClick);
      });

    filterSliders.forEach(slider => {
        slider.addEventListener('change', handleChange);
      });
    
      function handleClick(event) {
        const sliderToShow = event.target.getAttribute('data-slider');
        showFilterSlider(sliderToShow);
    }
    
    function showFilterSlider(sliderName) {
        console.log(sliderName);

        filterSliders.forEach(slider => {
            const sliderDataAttr = slider.getAttribute('data-slider');
            if (sliderDataAttr === sliderName) {
                slider.classList.remove('d-none'); // Mostra il corrispondente slider
            } else {
                slider.classList.add('d-none');
                slider.value=0;
                    // Nascondi gli altri slider
            }
        });
    }

    function handleChange(){
            const filterType = this.id;
            const value = this.value;
            let filterStyle = `${filterType}(${value}%)`;
            if(this.id === "blur"){
                filterStyle = `${filterType}(${value}px)`;
            }
            if(this.id === "hue-rotate"){
                filterStyle = `${filterType}(${value}deg)`;
            }
            filteredImage.style.filter = filterStyle;
        }// Costruisci la stringa CSS per i filtri corrispondenti
});
