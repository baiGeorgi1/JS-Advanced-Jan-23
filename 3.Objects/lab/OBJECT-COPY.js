const orders =
{
    template: { name: 'ACME Printer' },
    parts: ['print']
}

const returnedTarget = Object.assign({}, orders.template);
Object.keys(returnedTarget).forEach(x => {
    console.log(`${x} -> ${returnedTarget[x]}`)
});