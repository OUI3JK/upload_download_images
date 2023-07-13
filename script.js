function uploadImage() {
    const imageUrl = document.getElementById('image-url').value;
    const imageContainer = document.getElementById('image-container');
    const uploadedImage = document.getElementById('uploaded-image');
    const downloadLink = document.getElementById('download-link');

    if (imageUrl) {
        uploadedImage.src = imageUrl;
        downloadLink.href = imageUrl;
        downloadLink.setAttribute("download", "image.jpg");

        imageContainer.style.display = 'block';
        downloadLink.style.display = 'block';
    }
}
