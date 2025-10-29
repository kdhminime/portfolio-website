// Matrix-style code rain effect
class CodeRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.querySelector('.code-rain').appendChild(this.canvas);

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // Characters to use in the rain
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]()/*-+=';
        this.charArray = this.chars.split('');

        this.fontSize = 14;
        this.columns = this.canvas.width / this.fontSize;
        this.drops = [];

        // Initialize drops
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100;
        }

        this.animate();

        // Handle resize
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.columns = this.canvas.width / this.fontSize;
            this.drops = [];
            for (let i = 0; i < this.columns; i++) {
                this.drops[i] = Math.random() * -100;
            }
        });
    }

    animate() {
        // Fade effect
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#00ff00';
        this.ctx.font = this.fontSize + 'px monospace';

        for (let i = 0; i < this.drops.length; i++) {
            // Random character
            const text = this.charArray[Math.floor(Math.random() * this.charArray.length)];

            // Draw the character
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

            // Reset drop when it reaches bottom
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }

            this.drops[i]++;
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize code rain effect
new CodeRain();

// Typing effect for cursor
const cursorElement = document.querySelector('.cursor');
if (cursorElement) {
    setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0';
    }, 500);
}
