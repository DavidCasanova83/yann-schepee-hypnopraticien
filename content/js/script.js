window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("navbar").style.top = "90vh";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}