function getArticleGenerator(articles) {
    const divContent = document.getElementById('content');
    return function showNext() {
        if (articles.length != 0) {
            let newArtic = document.createElement('article');
            newArtic.textContent = articles.shift();
            divContent.appendChild(newArtic);
        }
    };
}
