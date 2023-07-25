let keyStateSet = new Set();

document.addEventListener("keydown", function (e) {
    e.preventDefault();
    console.info("onkeydown");
    if (keyStateSet.size == 0) document.dispatchEvent(new Event("keyStateChange"));
    keyStateSet.add(e.key);
});
document.addEventListener("keyup", function (e) {
    e.preventDefault();
    console.info("onkeyup");
    keyStateSet.delete(e.key);
});


let intervalID;
document.addEventListener("keyStateChange", function (e) {
    console.info("keyStateSet:" + keyStateSet.size);
    if (keyStateSet.size == 0) clearInterval(intervalID);
    intervalID = setInterval(function () {
        if (keyStateSet.has("ArrowLeft"))
            if (Number.parseInt(div_HERO.style.left.substring(0, div_HERO.style.left.length - 2)) > 0)
                div_HERO.style.left = Number.parseInt(div_HERO.style.left.substring(0, div_HERO.style.left.length - 2)) - 6 + "px";
        if (keyStateSet.has("ArrowUp"))
            if (Number.parseInt(div_HERO.style.top.substring(0, div_HERO.style.top.length - 2)) > 0)
                div_HERO.style.top = Number.parseInt(div_HERO.style.top.substring(0, div_HERO.style.top.length - 2)) - 6 + "px";
        if (keyStateSet.has("ArrowRight"))
            div_HERO.style.left = Number.parseInt(div_HERO.style.left.substring(0, div_HERO.style.left.length - 2)) + 6 + "px";
        if (keyStateSet.has("ArrowDown"))
            div_HERO.style.top = Number.parseInt(div_HERO.style.top.substring(0, div_HERO.style.top.length - 2)) + 6 + "px";

        // if (keyStateSet.has(" "))
        // // window.scroll({ top: 0, left: 100, behavior: 'smooth' });
        // // window.scrollBy(0, 10);
        // window.scrollBy({
        // 	top: 10,
        // 	left: 0,
        // 	behavior: "instant"
        // });
        div_HERO.scrollIntoView();
    }, 10);
});

document.addEventListener("keyStateChange", function (e) {
console.info("###");

});