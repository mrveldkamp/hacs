// Load content into head element
function loadHead() {
  let headEl = document.querySelector("head");
  headEl.innerHTML =
    `<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>HACS</title>
  
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Economica&family=Open+Sans&family=Raleway:wght@300&display=swap"
      rel="stylesheet">
  
    <!-- Page Icon -->
    <link rel="shortcut icon" type="image/png" href="/hacs/img/ainlay-logo-blue-white.png">
  
    <!-- Style Sheets -->
    <link rel="stylesheet" href="/hacs/css/style.css">
    <link href="/hacs/css/prism.css" rel="stylesheet" type="text/css" />`
}

// Load nav html into <nav> element using provided active class settings
function loadNav(cs10active, cs20active, cs30active, notesactive) {
  let navEl = document.querySelector("nav");
  navEl.innerHTML =
    `<div class="wrapper">
      <a id="logo" href="/hacs/">
        <img src="/hacs/img/ainlay-logo.png" width="32">
        HACS
      </a>
      <div>
        <!--
        <a href="/hacs/cs10.html" class="nav-link ${cs10active}">CS10</a>
        <a href="/hacs/cs20.html" class="nav-link ${cs20active}">CS20</a>
        <a href="/hacs/cs30.html" class="nav-link ${cs30active}">CS30</a>
        -->
        
        <a href="#" class="nav-link ${cs10active}">CS10</a>
        <a href="#" class="nav-link ${cs20active}">CS20</a>
        <a href="#" class="nav-link ${cs30active}">CS30</a>
        <a href="/hacs/concept-notes.html" class="nav-link ${notesactive}"><i class="far fa-sticky-note"></i></a>
      </div>
    </div>`;
}

function loadRightColumn() {
  let rightColumnEl = document.querySelector(".right-column");
  rightColumnEl.innerHTML =
    `<h4>Vocabulary</h4>
    <ul>
      <li><a href="#">Algorithm</a></li>
      <li><a href="#">Programming</a></li>
      <hr>
      <li><a href="#">Input</a></li>
      <li><a href="#">Output</a></li>
      <li><a href="#">If Statements</a></li>
    </ul>`;
}

// Dropdowns Code
let dropdowns = document.querySelectorAll(".dropdown");

for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", dropdownClicked);
}

function dropdownClicked(e) {
  // Toggle Active Class
  e.target.classList.toggle("active-drop");

  // Toggle hide/show next sibling
  let panel = e.target.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }

}