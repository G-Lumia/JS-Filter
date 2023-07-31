const imgInput = document.getElementById('imgInput');
const previewImage = document.getElementById('previewImage');

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
            previewImage.style.display = 'block';
        };

        reader.readAsDataURL(image);

    }
    else{
         alert('Seleziona un\'immagine valida.');
        fileInput.value = '';
    }
})