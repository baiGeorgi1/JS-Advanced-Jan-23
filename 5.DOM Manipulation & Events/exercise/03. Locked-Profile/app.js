function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach((btn) => { btn.addEventListener('click', clicked); });
    function clicked(event) {
        let profile = event.target.parentElement;
        let isActive = profile.querySelector('input[value="unlock"]').checked;
        if (isActive) {
            let info = profile.querySelector('div');
            if (event.target.textContent === 'Show more') {
                info.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                info.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}