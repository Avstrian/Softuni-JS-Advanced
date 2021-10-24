function search() {
   const rows = document.querySelectorAll('#towns li');
   let input = document.getElementById('searchText').value;
   const matchesDiv = document.getElementById('result');
   let numberMatches = 0;

   for (let row of rows) {
      if (row.textContent.includes(input)) {
         numberMatches += 1;
         row.style.textDecoration = 'underline';
         row.style.fontWeight = 'bold'; 
      }
   }
   matchesDiv.textContent = `${numberMatches} matches found`;
}
