var xhr = new XMLHttpRequest();
var url = "./news_article.json";

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var commentsHeader = document.createElement('h3');
        commentsHeader.textContent = "Comments:";

        var commentsList = document.createElement('ul');

        article.comments.forEach(function(comment){
            var commentItem = document.createElement('li');
            commentItem.textContent = comment;
            commentsList.appendChild(commentItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(commentsHeader);
        articleDiv.appendChild(commentsList);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();