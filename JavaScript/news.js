var newsArticles = [
    {"Title": "The website is in testing!", "Date": "24 February 2022", "Article": "The Lehigh University Capstone team has developed a beta version of the DJ NFT website.", "Thumbnail": "../Images/NFTExample3.png"},
    {"Title": "The website is in Development", "Date": "18 February 2022", "Article": "The Lehigh University Capstone team is in the process of developing the NFT website for MacguyverTech.", "Thumbnail": "../Images/NFTExample5.png"}
];

function loadNews() {
    var wrapper = document.createElement("div");
    wrapper.className = "row gx-5";
    document.getElementById("newsFeedContainer").appendChild(wrapper);
    for(var i = 0; i < newsArticles.length; i++) {
        var container = document.createElement("div");
        container.className = "col-sm-6";
        var articleTitle = document.createElement("h2");
        var articleDate = document.createElement("h6");
        var articleImg = document.createElement("img");
        var articleBody = document.createElement("h4");
        var directory = document.createElement("a");
        container.appendChild(articleTitle);
        container.appendChild(articleDate);
        container.appendChild(articleImg);
        container.appendChild(articleBody);
        container.appendChild(directory);
        articleTitle.innerHTML = newsArticles[i]["Title"];
        articleDate.innerHTML = newsArticles[i]["Date"];
        articleImg.src = newsArticles[i]["Thumbnail"];
        articleBody.innerHTML = newsArticles[i]["Article"];
        articleImg.style.width = "75%";
        articleImg.style.height = "auto";
        articleImg.style.marginLeft = "auto";
        articleImg.style.marginRight = "auto";
        articleImg.style.display = "block";
        articleImg.style.borderRadius = "10px";
        directory.innerHTML = "Read more";
        directory.href = "../HTML/newsarticle.html?title=" + articleTitle.innerHTML + "&date=" + articleDate.innerHTML + "&body=" + articleBody.innerHTML + "&thumbnail=" + articleImg.src;
        directory.style.display = "block";
        directory.style.textAlign = "center";
        wrapper.appendChild(container);
    }
}

window.addEventListener('load', loadNews);