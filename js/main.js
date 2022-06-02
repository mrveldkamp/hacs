// JS MVC Test

class Router {
  constructor() {
    this.contentEl = document.getElementById("content");
    this.query = this.parseQuery();
    this.loadPage();
  }

  parseQuery() {
    // Get URL Query String
    let queryString = window.location.search.trim();

    // Remove leading ? and maybe trailing /
    let end = queryString.length;
    if (queryString.endsWith("/")) {
      end = queryString.length - 1;
    }
    queryString = queryString.slice(1, end);

    // Check for root path
    if (queryString === "") {
      return "home";
    } else {
      return queryString;
    }
  }

  loadPage() {
    // Load File based on Query String
    fetch(`./${this.query}.html`)
      .then((data) => data.text())
      .then((html) => {
        this.contentEl.innerHTML = html;
        this.checkJSLoad();
      });
  }

  checkJSLoad() {
    // Load Prism for all pages
    import("../js/prism.js");

    // Load JS for certain pages...
    if (this.query === "cs10/test") {
      import("../cs10/test.js");
    }
  }
}

// Router
const router = new Router();
