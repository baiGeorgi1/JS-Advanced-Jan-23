function solve() {
   let shoppingCard = document.getElementsByClassName('shopping-cart')[0];
   let result = document.getElementsByTagName('textarea')[0];
   let total = 0;
   let items = [];
   let checkOut = false;

   shoppingCard.addEventListener('click', (event) => {
      if (event.target.nodeName !== 'BUTTON') {
         return;
      }
      if (checkOut) {
         return;
      }

      let btn = event.target;
      console.log(btn);
      if (Array.from(btn.classList).indexOf('add-product') >= 0) {
         let productInfo = event.target.parentElement.parentElement;
         let price = Number(productInfo.querySelectorAll('.product-line-price')[0].textContent);
         let procuctName = productInfo.querySelectorAll('.product-title')[0].textContent;
         result.textContent += `Added ${procuctName} for ${price.toFixed(2)} to the cart.\n`;
         if (items.indexOf(procuctName) < 0) {
            items.push(procuctName);
         }
         total += Number(price);

      } else if (Array.from(btn.classList).indexOf('checkout') >= 0) {
         let list = items.join(', ')
         result.textContent += `You bought ${list} for ${total.toFixed(2)}.`
         checkOut = true;
      }

   });

}