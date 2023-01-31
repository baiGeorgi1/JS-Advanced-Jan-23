function focused() {
    const target = Array.from(document.querySelectorAll('input'));

    target.forEach(section => {
        section.addEventListener('focus', () => {
            //console.log('focused');
            section.parentElement.className = 'focused';
        });
        section.addEventListener('blur', () => {
            //console.log('blured');
            section.parentElement.className = '';
        })
    });
}