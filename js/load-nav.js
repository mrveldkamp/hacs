/**
 * @param {String} url - address for the HTML to fetch
 * @return {String} the resulting HTML string fragment
 */
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

async function loadFileIntoEl(url, selector) {
  const targetEl = document.querySelector(selector);
  targetEl.innerHTML = await fetchHtmlAsText(url);
}