let count2 = 1;

setInterval(() => {
    nextImage2();
}, 4000);

function nextImage2() {
    count2++;

    if (count2>4) {
        count2 = 1
    };

    document.getElementById('radio'+count2+'b').checked = true;
}