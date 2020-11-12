let btn = document.getElementById('btn');
let text = document.getElementById('text');
let btn_secondary = document.getElementById('btn-secondary');
let cancel = document.getElementById('btn-third');
let iptxt = document.getElementById('iptxt');
let add = document.getElementById('ip-btn-add');
let iptxt_txt = document.getElementById('iptxt-txt');

let randomText = ['pain', 'vein', 'mother', 'child', 'play', 'game', 'over', 'manav', 'friends', 'amazon', 'fox', 'naruto', 'girl', 'boy'];

btn.addEventListener('click', () => {
let randomNumber = Math.floor((Math.random() * randomText.length - 1) + 1);
text.innerHTML = randomText[randomNumber];
});

btn_secondary.addEventListener('click', () => {
    iptxt.style.display = 'block';
    cancel.style.display = 'block';
});

cancel.addEventListener('click', () => {
    iptxt.style.display = 'none';
    cancel.style.display = 'none';
});

add.addEventListener('click', () => {
    randomText.push(iptxt_txt.value);
    iptxt_txt.value = '';
});