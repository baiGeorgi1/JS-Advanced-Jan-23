const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis',
    temp: createAssemblyLine().hasClima,

};

function createAssemblyLine() {
    const result = {
        hasClima() {
            let temp = 21;
            let tempSettings = 21;
            function adjustTemp() {
                if (temp < tempSettings) {
                    temp++;
                } else if (temp > tempSettings) {
                    temp--;
                }
                
            };
            return temp;
        },
        hasAudio() { },
        hasParktronic() { },
    };
    return result;

}
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
