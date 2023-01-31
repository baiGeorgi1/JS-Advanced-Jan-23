function calories(arr) {
    const result = {};
    const temp = arr.slice()
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            
            const [key, value] = temp.splice(0, 2);
            if (!result.hasOwnProperty(key)){
                result[key] = Number(value);
            }
        }
    }
    console.log(result);
}
calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
//calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
