export const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));

export function insertTheme(name, setIsThemeFetching) {
  return new Promise(async (resolve) => {
    document.body.style.overflow = "hidden";
    setIsThemeFetching(() => true);
    await sleep(500);
    const link = document.createElement("link");
    link.setAttribute("href", `./css/${name}.css`);
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("id", "theme-link");
    document.head.appendChild(link);

    link.onload = async () => {
      localStorage.setItem("theme", name);
      await sleep(500);
      setIsThemeFetching(() => false);
      document.body.style.overflow = "auto";
      resolve();
    };
  });
}

function setTheme(name, setIsThemeFetching) {
  return new Promise(async (resolve) => {
    const prevLink = document.getElementById("theme-link");
    const shouldChange = prevLink.getAttribute("href").includes(name);

    if (shouldChange) return resolve();
    prevLink.remove();
    await insertTheme(name, setIsThemeFetching);
  });
}

export default setTheme;
