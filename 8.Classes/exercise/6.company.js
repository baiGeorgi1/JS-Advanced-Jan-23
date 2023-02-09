class Company {
    constructor() {
        this.department = [];
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');

        } else {

            const info = [department, name, salary, position]
            this.department.push(info);
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }
    bestDepartment() {
        let dep = {};
        for (const line of this.department) {
            if (!dep[line[0]]) {
                dep[line[0]] = [];
            }
            const elem = line.slice(1);
            dep[line[0]].push(elem);
        }
        let averageSalary = 0;
        let bestDep = {};
        let employers = '';
        for (const key in dep) {
            let tempSalary = 0;
            for (const salary of dep[key]) {
                tempSalary += Number(salary[1]);
            }
            tempSalary /= dep[key].length;
            if (tempSalary > averageSalary) {
                averageSalary = tempSalary;
                bestDep = key;
                employers = dep[key];
            }
        }
        let sorted = employers.sort((kvpa, kvpb) => kvpb[1] - kvpa[1] || kvpa[0].localeCompare(kvpb[0]));
        let result = `Best Department is: ${bestDep}\nAverage salary: ${averageSalary.toFixed(2)}`;
        sorted.forEach(e => {
            result += `\n${e.join(' ')}`
        });
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 600, "HR", "Human resources");
console.log(c.bestDepartment());

