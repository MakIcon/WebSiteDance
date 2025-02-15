function makeElementsShake() {
    const allElements = document.querySelectorAll('body *'); // Find all elements on the page

    allElements.forEach(element => {
        // Exclude unnecessary elements
        if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE' && element.tagName !== 'META') {
            // Add jitter animation
            element.style.animation = 'shake 0.1s infinite'; // You can change the time to make it smoother
        }
    });

    // Add CSS animation for jitter
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-0.1px, -0.1px); }
            50% { transform: translate(0.1px, 0.1px); }
            75% { transform: translate(-0.1px, 0.1px); }
            100% { transform: translate(0.1px, -0.1px); }
        }
    `;
    document.head.appendChild(style);
}

// Run
makeElementsShake();

console.log('Элементы теперь дрожат! 🎉');
