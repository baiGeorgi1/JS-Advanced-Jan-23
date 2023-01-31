function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const input = document.querySelector('#inputs > textarea ');
  const bestRestourant = document.querySelector('#bestRestaurant>p');
  const bestWorker = document.querySelector('#outputs > #workers>p');
  function onClick() {
    let arr = JSON.parse(input.value);
    const allrestourant = {};
    let bestSalary = 0;
    let betterRest = '';
    let avgSalary = 0;
    let curentAvg = 0;
    for (const line of arr) {
      let [restName, others] = line.split(' - ');
      const workers = {};
      let items = others.split(', ');
      for (const line of items) {
        let [workerName, salary] = line.split(' ');
        workers[workerName] = Number(salary);
        curentAvg += Number(salary);
      }
      let sorted = Object.entries(workers).sort((a, b) => b[1] - a[1]);
      curentAvg = (curentAvg / sorted.length).toFixed(2);

      if (curentAvg > avgSalary) {
        avgSalary = Number(curentAvg);
        betterRest = restName;
        bestSalary = Number(sorted[0][1]);
      } curentAvg = 0;
      allrestourant[restName] = sorted;
    }
    bestRestourant.textContent = `Name: ${betterRest} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
    for (const res in allrestourant) {
      if (res.includes(betterRest)) {
        let list = '';
        for (const w of allrestourant[res]) {
          list += `Name: ${w[0]} With Salary: ${Number(w[1])} `
        }
        bestWorker.innerHTML = list;
      }
    }
  }
}
