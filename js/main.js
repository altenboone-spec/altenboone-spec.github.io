(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Mark current nav item from path
  var path = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll(".nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href) return;
    var resolved = new URL(href, window.location.href).pathname.replace(/\/$/, "") || "/";
    if (resolved === path || (path.indexOf("/blog") === 0 && resolved.indexOf("/blog") === 0 && href.indexOf("blog") !== -1 && !href.match(/blog\/.+\.html/))) {
      // Home vs blog index: only exact or blog listing
      if (href.indexOf("index.html") !== -1 || href.endsWith("/blog/") || href.endsWith("blog/index.html") || href === "blog/" || href === "./" || href === "index.html" || href === "../index.html") {
        if (resolved === path || (path.endsWith("/blog") && (href.indexOf("blog") !== -1))) {
          a.setAttribute("aria-current", "page");
        }
      } else if (resolved === path) {
        a.setAttribute("aria-current", "page");
      }
    }
  });
})();
