function create(words) {

   for (let word of words) {
      const newElement = document.createElement('div');
      const newParagraph = document.createElement('p');

      newParagraph.textContent = word;
      newParagraph.style.display = 'none';
      newElement.addEventListener('click', onClick);
      
      newElement.appendChild(newParagraph);
      document.getElementById('content').appendChild(newElement);
   }
   
   function onClick(ev) {
      ev.target.firstChild.style.display = '';
   }
}