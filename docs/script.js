"use strict";

let second;

const arr = [
    `<img src="/pictures/1.webp" alt="Pictures_1"/>`,
    `<img src="/pictures/2.webp" alt="Pictures_2"/>`,
    `<img src="/pictures/3.webp" alt="Pictures_3"/>`
];

const container = document.createElement("container");
container.className = "list_img";

function creat() {
    arr.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = `${element}`;
        div.className = "img";
        if (element === arr[1]) div.className = "img active";
        container.append(div);
    });
    document.querySelector('.scroll_gallery').append(container);
}

creat(arr);

document.getElementById('right').addEventListener('click', () => {
    scroll(rightScroll, "-220px")
})

document.getElementById('left').addEventListener('click', () => {
    scroll(leftScroll, "220px")
})

function rightScroll() {
    let elm = arr.shift(0);
    arr.push(elm);
    container.innerHTML = '';
    creat(arr);
    second = document.querySelector('.active');
    scrollUl("220px");
}

function leftScroll() {
    let elm = arr.pop(3);
    arr.unshift(elm);
    container.innerHTML = '';
    creat(arr);
    second = document.querySelector('.active');
    scrollUl("-220px");
}

function scroll(side, y) {
    second = document.querySelector('.active');
    second.animate([
        { transform: 'scale(1.3)' },
        { transform: 'scale(1)' },
    ], 1000);
    container.animate([
        { transform: 'translate(0, 0)', opacity: 1 },
        { transform: `translate(${y}, 0)`, opacity: 0 }
    ], 1000);
    setTimeout(side, 500);
}

function scrollUl(y) {
    container.animate([
        { transform: `translate(${y}, 0)`, opacity: 0 },
        { transform: 'translate(0, 0)', opacity: 1 }
    ], 1000);
    second.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.3)' },
    ], 1000);
}

function rightScroll() {
    let elm = arr.shift(0);
    arr.push(elm);
    container.innerHTML = '';
    creat(arr);
    second = document.querySelector('.active');
    scrollUl("220px");
}

function leftScroll() {
    let elm = arr.pop(3);
    arr.unshift(elm);
    container.innerHTML = '';
    creat(arr);
    second = document.querySelector('.active');
    scrollUl("-220px");
}
