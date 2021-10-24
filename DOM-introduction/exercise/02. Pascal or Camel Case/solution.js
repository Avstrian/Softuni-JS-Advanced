function solve() {
  let text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const textList = text.split(' ');
  const result = [];

  if (convention == 'Pascal Case') {
    for (let item of textList) {
      item = item.toLowerCase();

      let firstLetter = item[0].toUpperCase();
      item = item.slice(1);
      item = firstLetter + item;
      result.push(item);
    }
  }
  else if (convention == 'Camel Case') {
    for (let item of textList) {
      if (item != textList[0]) {
        item = item.toLowerCase();
        let firstLetter = item[0].toUpperCase();
        item = item.slice(1);
        item = firstLetter + item;
      }
      else {
        item = item.toLowerCase();
      }
      result.push(item);
    }
  }

  if (result.length > 0) {
    document.getElementById('result').textContent = result.join('');
  }
  else {
    document.getElementById('result').textContent = 'Error!'
  }
}
