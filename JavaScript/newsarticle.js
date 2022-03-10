function loadArticle() {
    document.getElementById("title").innerHTML = pairList["title"];
    document.getElementById("date").innerHTML = pairList["date"];
    document.getElementById("image").src = pairList["thumbnail"];
    document.getElementById("article").innerHTML = pairList["body"];
}

function getParams() {
    var paramString = document.URL.indexOf('?');
    var pairList = {};
    if(paramString != -1) {
        var pairs = decodeURI(document.URL.substring(paramString+1, document.URL.length)).split('&');
        for(var i = 0; i < pairs.length; i++) {
            var varValPair = pairs[i].split('=');
            pairList[varValPair[0]] = varValPair[1];
            console.log(varValPair[1]);
        }
    }
    return pairList;
}

var pairList = getParams();

window.addEventListener('load', loadArticle);