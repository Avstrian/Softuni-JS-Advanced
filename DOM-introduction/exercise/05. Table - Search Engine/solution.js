function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rows = document.querySelectorAll('.container tr');
      const search = document.getElementById('searchField');

      for (let row = 2; row < rows.length; row++) {
         let currentRow = rows[row];
         for (let col = 0; col < 3; col++) {
            let currentCol = currentRow.children[col];

            if (currentCol.textContent.includes(search.value)) {
               currentRow.className = 'select';
            }
         }
      }
   }
}