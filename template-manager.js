var callback = function(){
 let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        div.innerHTML = this.responseText;
        document.body.prepend(div.querySelector('.header'));
    }
};
xhttp.open("GET", "temlplate.html", true);
xhttp.send();
  
  
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
