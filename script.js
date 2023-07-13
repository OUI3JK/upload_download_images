function uploadImage() {
    const input = document.getElementById('upload-input');
    const imageContainer = document.getElementById('image-container');
    const uploadedImage = document.getElementById('uploaded-image');
    const downloadLink = document.getElementById('download-link');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            downloadLink.href = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
        imageContainer.style.display = 'block';
        downloadLink.style.display = 'block';
    }
}
