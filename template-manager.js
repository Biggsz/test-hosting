var callback = function(){
 let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     let div = document.createElement("div");
     div.innerHTML = this.responseText;
     document.body.prepend(div.querySelector('.header'));
     let content = document.body.querySelector('.content');
     content.className = content.className + ' visible';
    }
};
xhttp.open("GET", "header.html", true);
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
