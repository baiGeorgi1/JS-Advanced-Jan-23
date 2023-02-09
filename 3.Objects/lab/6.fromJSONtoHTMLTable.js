function solve(string) {
    let items = JSON.parse(string);
    let result = '<table>\n   <tr>';
    const coloumnName = Object.keys(items[0]);
    for (const name of coloumnName) {

        result += `<th>${name}</th>`;
    }
    result += '</tr>\n';

    for (const line of items) {
        result += '   <tr>';
        Object.values(line).forEach(x => { result += `<td>${x}</td>`; });
        result += '</tr>\n';
    }
    result += '</table>';
    console.log(result);
}
solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)

