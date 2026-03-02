const startBtn = document.getElementById("startBtn");
const landingPage = document.getElementById("landingPage");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", function() {
    music.currentTime = 0;
    music.volume = 1;

    music.play().then(() => {
        console.log("Musik jalan 🔥");
    }).catch(err => {
        console.log("Play error:", err);
    });

    landingPage.style.display = "none";
});