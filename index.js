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

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('#logo-image');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.style.display = 'inline-block';
            document.getElementById("upload-label").innerHTML = this.files[0].name;
        }
    });
});

function colorSwitch(color) {
    document.getElementById("umbrella-image").src = buttonMapping[color].image;
    document.getElementById("upload-button").style.backgroundColor = buttonMapping[color].buttonColor;
    document.body.style.backgroundColor = buttonMapping[color].backgroundColor;
}