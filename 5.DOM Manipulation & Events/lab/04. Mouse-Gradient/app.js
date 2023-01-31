function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    function gradientMove(event) {
        console.log(event);
        // offsetX - x na eventa (ima go v konzolata na browsera)
        // event.target.clientWidth => ЕвентТаргет ни дава референция към събитието,което е предизвикано,а клиентWidth е св-во,което ни дава колко е ширината на елемента, в който се движи мишката!
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + '%';
    }
    function gradientOut(event) {
        document.getElementById('result').textContent = '';
    }
}