var nftPlaceHolderImages = [
    "../Images/NFTExample3.png",
    "../Images/NFTExample4.png",
    "../Images/NFTExample5.png"
];

var nftPlaceHolderImg = document.getElementById("nftExampleHolder");
var rotationCount = 0;

function updateNFTImage() {
    nftPlaceHolderImg.src = nftPlaceHolderImages[rotationCount];
    if(rotationCount < nftPlaceHolderImages.length - 1) {
        rotationCount++;
    } else {
        rotationCount = 0;
    }
}

window.setInterval(updateNFTImage, 2000);