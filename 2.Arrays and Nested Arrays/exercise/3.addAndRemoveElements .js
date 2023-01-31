function addRemove(array) {
    let initial = 1;
    const myArr = [];
    for (const act of array) {
        switch (act) {
            case 'add':
                myArr.push(initial++)
                break;
            case 'remove':
                myArr.pop(initial++);
                break;
        }
    }
    if (!myArr.length) {
        console.log('Empty');
    }
    console.log(myArr.join('\n'));
}
addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove(['remove', 'remove', 'remove'])
