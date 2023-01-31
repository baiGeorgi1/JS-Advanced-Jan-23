function generateReport() {
    const outputElement = document.querySelector('#output');
    const result = [];
    const checks = Array.from(document.querySelectorAll('thead tr th input'));
    const trs = Array.from(document.querySelectorAll('tbody tr'));
    trs.forEach(row => {
        const obj = {};
        const arr = Array.from(row.querySelectorAll('td'))
        arr.forEach((x, i) => {
            if (checks[i].checked) {
                obj[checks[i].name] = x.textContent;
            }
        });

        result.push(obj);
    });
    outputElement.value = JSON.stringify(result)
}