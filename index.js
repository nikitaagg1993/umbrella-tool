const buttonMapping = {
    blue: {
        backgroundColor: "#e0f5ff",
        buttonColor: "#2dafeb",
        image: "static/blue-umbrella.png",
    },
    pink: {
        backgroundColor: "#fff2fc",
        buttonColor: "#db0d89",
        image: "static/pink-umbrella.png",
    },
    yellow: {
        backgroundColor: "#fcf9eb",
        buttonColor: "#f2d14b",
        image: "static/yellow-umbrella.png",
    }
};

let uploadedFile;

function addLogo(umbrella) {
    if (uploadedFile && uploadedFile[0]) {
        let loader = document.getElementById("umbrella-image")
        let imageSource = loader.src;
        // loader.style.display = 'none';

        let svg = document.getElementById("loader-svg");
        svg.style.fill = "pink";
        loader.src="static/loader_icon.svg";
        loader.className="loader";

        let uploadButton = document.getElementById("upload-icon");
        uploadButton.src="static/loader_icon.svg"
        // uploadButton.style.height = "25px";
        uploadButton.className="uploadIcon loaderIcon";

        let img = document.querySelector('#logo-image');
        img.style.display = 'none';
        document.getElementById("label-text").innerHTML = uploadedFile[0].name;


        setTimeout(() => {
            uploadButton.src = "static/upload_icon.svg";
            uploadButton.className = "uploadIcon";
            loader.src = umbrella || imageSource;
            loader.className = "umbrellaImage";
              // $('img')[0]
            img.src = URL.createObjectURL(uploadedFile[0]); // set src to blob url
            img.style.display = 'inline-block';
        }, 100000)
    }
}
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        uploadedFile = this.files;
        addLogo();
    });
});

function colorSwitch(color) {
    addLogo(buttonMapping[color].image);
    // document.getElementById("umbrella-image").src = buttonMapping[color].image;
    document.getElementById("upload-label").style.backgroundColor = buttonMapping[color].buttonColor;
    document.body.style.backgroundColor = buttonMapping[color].backgroundColor;
}