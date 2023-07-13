function uploadImage() {
    const input = document.getElementById('upload-input');
    const imageContainer = document.getElementById('image-container');
    const uploadedImage = document.getElementById('uploaded-image');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
        imageContainer.style.display = 'block';
    }
}
