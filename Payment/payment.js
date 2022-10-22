var mainScrollArea = document.getElementsByClassName('mdl-layout__content')[0];
var scrollTimeout;

window.onload = function () {
  if(window.location.href == localStorage.getItem('lastUrl')) {
    mainScrollArea.scrollTop = localStorage.getItem('scrollTop');
  } else {
    localStorage.setItem('lastUrl', window.location.href);
    localStorage.setItem('scrollTop', 0);
  }
}

mainScrollArea.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {
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
  var number = document.getElementById("number").value;
  var invNumber = document.getElementById("invalid-number-warning");

  if(number == "") {
    invNumber.innerHTML = 'Invalid';
  }

  var expire = document.getElementById("expire").value;
  var year = document.getElementById("year").value;
  var invExpire = document.getElementById("invalid-expire-warning");

  if(expire == "" || expire < 1 || expire > 12 || year == "" || year < 2022 || year > 2047) {
    invExpire.innerHTML = 'Invalid';
  }

  var security = document.getElementById("security").value;
  var invSecurity = document.getElementById("invalid-security-warning");

  if(security.length < 3) {
    invSecurity.innerHTML = 'Invalid';
  }

  var first = document.getElementById("first").value;
  var invFirst = document.getElementById("invalid-first-warning");

  if(first == "") {
    invFirst.innerHTML = 'Invalid';
  }

  var last = document.getElementById("last").value;
  var invLast = document.getElementById("invalid-last-warning");

  if(last == "") {
    invLast.innerHTML = 'Invalid';
  }

  var city = document.getElementById("city").value;
  var invCity = document.getElementById("invalid-city-warning");

  if(city == "") {
    invCity.innerHTML = 'Invalid';
  }

  var address1 = document.getElementById("address1").value;
  var invAddress1 = document.getElementById("invalid-address1-warning");

  if(address1 == "") {
    invAddress1.innerHTML = 'Invalid';
  }

  var postal = document.getElementById("postal").value;
  var invPostal = document.getElementById("invalid-postal-warning");

  if(postal == "") {
    invPostal.innerHTML = 'Invalid';
  }
  
  var phone = document.getElementById("phone").value;
  var invPhone = document.getElementById("invalid-phone-warning");

  if(phone == "") {
    invPhone.innerHTML = 'Invalid';
  }
  
}