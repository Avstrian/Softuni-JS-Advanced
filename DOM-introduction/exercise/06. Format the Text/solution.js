function solve() {
  const uneditedText = document.getElementById('input').value.split('.').filter((el) => el != "");
  const result = [];

  const paragraph = [];

  for (let i = 0; i < uneditedText.length; i++) {
    uneditedText[i].trim();
    if (paragraph.length < 3) {
      paragraph.push(uneditedText[i]);
    }
    else {
      result.push(`<p>${paragraph.join('. ')}</p>`);
      paragraph.splice(0, paragraph.length);
      paragraph.push(uneditedText[i]);
    }
  }

  if (paragraph.length == 1) {
    result.push(`<p>${paragraph[0]}.</p>`)
  }

  else if (paragraph.length > 0) {
    result.push(`<p>${paragraph.join('. ')}</p>`);
  }
  
  document.getElementById('output').innerHTML = result.join('.');
}
