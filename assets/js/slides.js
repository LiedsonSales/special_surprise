let count = 1;

setInterval(() => {
    nextImage();
}, 4000);

function nextImage() {
    count++;

    if (count>4) {
        count = 1
    };

    document.getElementById('radio'+count).checked = true;
}