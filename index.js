
// Design mappings for different themes
const buttonMapping = {
    blue: {
        backgroundColor: "#e0f5ff",
        buttonColor: "#2dafeb",
        image: "static/blue-umbrella.png",
        loaderFilter: "invert(1) brightness(0.5) sepia(1) saturate(700%) hue-rotate(180deg)"
    },
    pink: {
        backgroundColor: "#fff2fc",
        buttonColor: "#db0d89",
        image: "static/pink-umbrella.png",
        loaderFilter: "invert(1) brightness(0.5) sepia(1) saturate(03000%) hue-rotate(5000deg)"
    },
    yellow: {
        backgroundColor: "#fcf9eb",
        buttonColor: "#f2d14b",
        image: "static/yellow-umbrella.png",
        loaderFilter: "invert(1) brightness(0.7) sepia(1) saturate(700%)"
    }
};

let uploadedFile;
let imageSource;
let umbrella;

// adding event to detect when a file has been uploaded
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        uploadedFile = this.files;
        addLogo();
    });
});

// to attach a logo to image
//umbrella is the new umbrella image when different color is selected
// loaderFilter is the css filter for the loader
function addLogo(loaderFilter) {

    if (uploadedFile && uploadedFile[0]) {
        let umbrellaPicture = document.getElementById("umbrella-image");
        imageSource = umbrellaPicture.src;
 
        let parent = document.getElementById("image-container");

        let loaderImage = document.createElement("img");
        if(loaderFilter) loaderImage.style.filter = loaderFilter;
        loaderImage.src="static/loader_icon.svg";
        loaderImage.className="loader";

        parent.replaceChild(loaderImage,umbrellaPicture)

        let uploadButton = document.getElementById("upload-icon");
        // changing upload icon to loader
        uploadButton.src="static/loader_icon.svg"
        uploadButton.className="uploadIcon loaderIcon";

        // disabling file input when loader is dispalying
        let fileInput = document.getElementById("upload-input");
        fileInput.disabled = true;

        // Hide logo when already applied, in case of color switch
        let img = document.querySelector('#logo-image');
        img.style.display = 'none';

        //update upload file button label
        if(uploadedFile && uploadedFile.length)
        document.getElementById("label-text").innerHTML = uploadedFile[0].name;


        setTimeout(() => {
            // displaying upload icon on button
            uploadButton.src = "static/upload_icon.svg";
            uploadButton.className = "uploadIcon";

            // Adding umbrella picture and disabling filter
            let newUmbrellaPicture = document.createElement("img");
            newUmbrellaPicture.style.filter= 'none';
            newUmbrellaPicture.src = umbrella || imageSource;
            newUmbrellaPicture.className = "umbrellaImage";
            newUmbrellaPicture.id = "umbrella-image";

            parent.replaceChild(newUmbrellaPicture, loaderImage);

            uploadButton.disabled = false;

            // using uploaded file to create logo
            img.src = URL.createObjectURL(uploadedFile[0]); // set src to blob url
            img.style.display = 'inline-block';
            fileInput.disabled = false;
        }, 2000)
    }
}

// to change theme
function colorSwitch(color) {
    umbrella = buttonMapping[color].image;
    addLogo(buttonMapping[color].loaderFilter);
    if(!uploadedFile || !uploadedFile.length) document.getElementById("umbrella-image").src = buttonMapping[color].image;
    document.getElementById("upload-label").style.backgroundColor = buttonMapping[color].buttonColor;
    document.body.style.backgroundColor = buttonMapping[color].backgroundColor;
}