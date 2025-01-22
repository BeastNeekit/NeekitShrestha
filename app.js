(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-sound');
    var playButton = document.getElementById('play-sound-button');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    var blinkText = document.querySelector('.name span:nth-child(3)');
    var isBlink = true;

    setInterval(function() {
        if (isBlink) {
            blinkText.textContent = "-..<";
        } else {
            blinkText.textContent = "-..-";
        }
        isBlink = !isBlink;
    }, 1000);
});


document.querySelector('.theme-btn').addEventListener('click', function() {
    var qrImage = document.getElementById('qr-image');
    qrImage.classList.add('fade-out');
    setTimeout(function() {
        if (qrImage.src.includes('qr.png')) {
            qrImage.src = './images/qr2.png';
        } else {
            qrImage.src = './images/qr.png';
        }
        qrImage.classList.remove('fade-out');
        qrImage.classList.add('fade-in');
        setTimeout(function() {
            qrImage.classList.remove('fade-in');
        }, 500);
    }, 500);
});
