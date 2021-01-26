var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var body = document.getElementsByTagName("BODY")[0];
let modal = document.getElementById("modal");


//if (navigator.userAgent.search("Chrome") >= 0) {
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
    body.style.margin = 0;
    body.style.height = "100%";
    body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
    body.style.height = "initial";
    body.style.overflow = "initial";

}

