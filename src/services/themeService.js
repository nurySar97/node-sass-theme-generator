export function toggleTheme(name = "default") {
  removePrev();
  insertStylesheet(name);
}

function removePrev() {
  const link = document.getElementById("theme-link");
  link.remove();
}

function insertStylesheet(name) {
  return new Promise((resolve) => {
    var link = document.createElement("link");
    link.setAttribute("href", `/css/${name}.css`);
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("id", "theme-link");
    resolve(link);
  }).then((link) => document.getElementsByTagName("head")[0].appendChild(link));
}
