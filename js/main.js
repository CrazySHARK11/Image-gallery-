const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function Openfullimg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic
}

function closefullimg() {
    fullImgBox.style.display = "none";
}