function typingEffect() {
    const text = 'I am Andres Cordero.'
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, delay * i);
    }
}

document.addEventListener('DOMContentLoaded', typingEffect);


/* Whatsapp funtion */
function handleClick() {
    const phone = '50688020529'; // replace with your WhatsApp number (no + or spaces)
    const message = encodeURIComponent("Hi! I'm interested in your services.");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
}