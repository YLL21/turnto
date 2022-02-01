function travelling() {
  var url = new Array();
  var rip_url = "https://travellings.link/assets/rip.html";

  url[0] = "https://multigu.cn";
 

  if (document.referrer) {
    var origin = new URL(document.referrer).origin;
    if (url.includes(origin)) {
      url.splice(url.indexOf(origin), 1);
    }
  }


  var ints = Math.floor(Math.random() * url.length);
  window.location = url[ints];
}
