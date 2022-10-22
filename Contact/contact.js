var mainScrollArea = document.getElementsByClassName('mdl-layout__content')[0];
var scrollTimeout;

window.onload = function () {
  if (window.location.href == localStorage.getItem('lastUrl')) {
    mainScrollArea.scrollTop = localStorage.getItem('scrollTop');
  } else {
    localStorage.setItem('lastUrl', window.location.href);
    localStorage.setItem('scrollTop', 0);
  }
}

mainScrollArea.addEventListener('scroll', function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function () {
    localStorage.setItem('scrollTop', mainScrollArea.scrollTop);
  }, 100)
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};

function checkField() {
  var name = document.getElementById("name").value;
  var invName = document.getElementById("invalid-name-warning");

  if(name == "") {
    invName.innerHTML = 'Required';
  }

  var email = document.getElementById("email").value;
  var invEmail = document.getElementById("invalid-email-warning");

  if(email != "") {
    if(!email.includes('@')) invEmail.innerHTML = 'Requires @'
  }

  if(email == "") {
    invEmail.innerHTML = 'Required';
  }

  var msg = document.getElementById("message").value;
  var invMessage = document.getElementById("invalid-message-warning");

  if(msg == "") {
    invMessage.innerHTML = 'Required';
  }
}