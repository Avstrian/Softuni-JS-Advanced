function getArticleGenerator(articles) {
    const articlesList = Array.from(articles);
    const content = document.getElementById('content');

    return () => {
        if (articlesList.length != 0) {
            const article = document.createElement('article');
            article.textContent = articlesList.shift();
            content.appendChild(article);
        }
    }
}
