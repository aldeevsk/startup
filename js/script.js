(function () {
    let btn = document.querySelector('.mob-nav__button');
    let nav = document.querySelector('.mob-nav');
    let body = document.querySelector('body');
    btn.onclick = function () {
        btn.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('lock');
    }
}());

(function () {
    let footer = document.querySelector('footer');
    let text = 1;
    footer.innerHTML = text;
    footer.onclick = (event) => {
        text = text + 1;
        event.target.innerHTML = text;
        return text;
    }
}());

