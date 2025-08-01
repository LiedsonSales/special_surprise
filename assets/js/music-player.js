var player = document.getElementById('player');
let progress = document.getElementById('progress');
let playbtn = document.getElementById('playbtn');
let playMusic = document.getElementById('fa-play');

var playPause = function() {
    // if (player.paused) {
    //     player.play().then(() => {
    //         playbtn.classList.remove('fa-play');
    //         playbtn.classList.add('fa-pause');
    //     }).catch((err) => {
    //         console.error("Erro ao tocar áudio:", err);
    //     });
    // } else {
    //     player.pause();
    //     playbtn.classList.remove('fa-pause');
    //     playbtn.classList.add('fa-play');
    // }

    if (player.paused) {
        player.play()
    } else {
        player.pause()
    }
}

playbtn.addEventListener('click', playPause);


player.onplay = function() {
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');
}

player.onpause = function() {
    playbtn.classList.add('fa-play');
    playbtn.classList.remove('fa-pause');
}

player.ontimeupdate = function() {
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);
    //progress
    let duration = player.duration;
    prog = Math.floor((ct * 100) / duration);
    progress.style.setProperty("--progress", prog + '%');
}

function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;

}