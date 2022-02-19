var newsArticles = [
    {"Title": "The website is in Development", "Date": "18 February 2022", "Article": "The Lehigh University Capstone team is in the process of developing the NFT website for MacguyverTech."},
    {"Title": "The website is in Development", "Date": "18 February 2022", "Article": "The Lehigh University Capstone team is in the process of developing the NFT website for MacguyverTech."}
];

function loadNews() {
    var wrapper = document.createElement("div");
    wrapper.className = "row";
    document.getElementById("newsFeedContainer").appendChild(wrapper);
    for(var i = 0; i < newsArticles.length; i++) {
        var container = document.createElement("div");
        container.className = "col-sm-6"
        var articleTitle = document.createElement("h2");
        var articleDate = document.createElement("h6");
        var articleBody = document.createElement("h4");
        container.appendChild(articleTitle);
        container.appendChild(articleDate);
        container.appendChild(articleBody);
        articleTitle.innerHTML = newsArticles[i]["Title"];
        articleDate.innerHTML = newsArticles[i]["Date"];
        articleBody.innerHTML = newsArticles[i]["Article"];
        wrapper.appendChild(container);
    }
}

window.addEventListener('load', loadNews);