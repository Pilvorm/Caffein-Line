var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    // if (currentScrollPos <= 150) {
    //   document.getElementById("navbar").style.borderBottom = "none";
    // } else {
    //   document.getElementById("navbar").style.borderBottom = "1px solid white";
    // }
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};