const dataDoEvento = new Date("Dec 19, 2023 08:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (diaEmMs));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `A live começa em <br> ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Poxa, a Live Party já rolou. Mas ainda temos lives por lá, clica aí e cola com a gente.';
    }
}, 1000);

const Confettiful = function(el) {
    this.el = el;
    this.containerEl = null;
    
    this.confettiFrequency = 3;
    this.confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
    this.confettiAnimations = ['slow', 'medium', 'fast'];
    
    this._setupElements();
    this._renderConfetti();
};

Confettiful.prototype._setupElements = function() {
const containerEl = document.createElement('div');
const elPosition = this.el.style.position;

if (elPosition !== 'relative' || elPosition !== 'absolute') {
    this.el.style.position = 'relative';
}

containerEl.classList.add('confetti-container');

this.el.appendChild(containerEl);

this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function() {
this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement('div');
    const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
    const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
    const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
    const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
    
    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;
    
    confettiEl.removeTimeout = setTimeout(function() {
    confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);
    
    this.containerEl.appendChild(confettiEl);
}, 100);
};

window.confettiful = new Confettiful(document.querySelector('.js-container'));