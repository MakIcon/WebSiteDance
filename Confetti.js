function addBackgroundMusic() {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
}

function addConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.animation = `fall ${Math.random() * 5 + 2}s linear infinite`;
        confettiContainer.appendChild(confetti);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            0% { transform: translateY(-100vh) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

addBackgroundMusic();
addConfetti();

console.log('Сайт танцует без поворотов! 🕺');
