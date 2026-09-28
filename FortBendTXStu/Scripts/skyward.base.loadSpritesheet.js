(async function () {
    const xhr = new XMLHttpRequest();
    const xhrLoaded = new Promise((res, rej) => { xhr.onload = res; xhr.onabort = rej; xhr.onerror = rej; });
    xhr.responseType = "document";
    if (window.location.pathname === "srcdoc")
    {
        return;
    }
     const virtualDir = window.location.pathname.slice(1).split("/", 1)[0];
    xhr.open("GET", `/${virtualDir}/skysys/svg/spritesheet?v=6`);
    xhr.send();
    await xhrLoaded;
    if (document.readyState === "loading")
    {
        await new Promise(res => document.addEventListener("DOMContentLoaded", res, { once: true }));
    }
    const spritesheet = xhr.responseXML.documentElement;
    document.head.appendChild(spritesheet);
})();
