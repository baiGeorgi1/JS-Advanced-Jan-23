function create(words) {
   const field = document.getElementById('content')
   for (const word of words) {

      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      let divCont = document.createElement('div');
      divCont.appendChild(p);


      divCont.addEventListener('click', () => {
         p.style.display = '';
      });
      field.appendChild(divCont);
      console.log(word);
   }
}