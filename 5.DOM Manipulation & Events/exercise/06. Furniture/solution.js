function solve() {
  const [generate, buy] = Array.from(document.querySelectorAll('div button'));
  generate.addEventListener('click', generator);
  buy.addEventListener('click', buying);

  function generator() {
    const input = JSON.parse(document.querySelector('textarea').value);
    input.forEach(element => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const image = document.createElement('img');
      image.src = element.img;
      td1.appendChild(image);
      tr.appendChild(td1);
      const td2 = document.createElement('td');
      const par2 = document.createElement('p');
      par2.textContent = element.name;
      td2.appendChild(par2);
      tr.appendChild(td2);
      const td3 = document.createElement('td');
      const par3 = document.createElement('p');
      par3.textContent = Number(element.price);
      td3.appendChild(par3);
      tr.appendChild(td3);
      const td4 = document.createElement('td');
      const par4 = document.createElement('p');
      par4.textContent = Number(element.decFactor);
      td4.appendChild(par4);
      tr.appendChild(td4);
      const td5 = document.createElement('td');
      const mark = document.createElement('input');
      mark.type = 'checkbox';
      td5.appendChild(mark);
      tr.appendChild(td5);
      document.querySelector('tbody').appendChild(tr);
    });

  }
  function buying() {
    const checkBoxes = Array.from(document.querySelectorAll('tr input')).filter((x) => x.checked);
    let total = 0;
    let bought = [];
    let avgDecor = 0;

    for (const line of checkBoxes) {
      const parent = line.parentElement.parentElement;
      const item = parent.querySelectorAll('p');
      bought.push(item[0].textContent);
      total += Number(item[1].textContent);
      avgDecor += Number(item[2].textContent);
    }
    avgDecor /= bought.length;
    const text = document.querySelectorAll('textarea')[1];
    text.textContent = `Bought furniture: ${bought.join(', ')}\n`;
    text.textContent += `Total price: ${total.toFixed(2)}\n`;
    text.textContent += `Average decoration factor: ${avgDecor}`;
  }
}
