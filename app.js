function menuchange() {
    var menubar1 = document.querySelector('#bar1')
    var menubar2 = document.querySelector('#bar2')
    var menubar3 = document.querySelector('#bar3')
    var ul = document.querySelector('ul')
    menubar1.classList.toggle('bar1change')
    menubar2.classList.toggle('bar2change')
    menubar3.classList.toggle('bar3change')
    ul.classList.toggle('ulchange')
}

function imgchange1() {
    document.getElementById('mainimg').src = 'https://static.vecteezy.com/system/resources/previews/001/397/455/large_2x/indian-style-of-italian-dish-paneer-pizza-free-photo.jpg'
}

function imgchange2() {
    document.getElementById('mainimg').src = 'https://static.vecteezy.com/system/resources/previews/001/312/818/large_2x/vegetable-salad-on-wooden-background-free-photo.jpg'
}

function imgchange3() {
    document.getElementById('mainimg').src = 'https://static.vecteezy.com/system/resources/previews/002/198/371/large_2x/sushi-roll-salmon-maki-free-photo.jpg'
}

function imgchange4() {
    document.getElementById('mainimg').src = 'https://static.vecteezy.com/system/resources/previews/002/484/718/large_2x/closeupgraphy-of-delicious-piece-of-cake-on-top-of-a-white-plate-free-photo.jpg'
}

function enlarge() {
    document.getElementById('comment').style.transform = 'translate(-50%,-50%) scale(1, 1)'
    document.getElementById('comment').style.visibility = 'visible';
    document.getElementById('container').style.opacity = 0.2
}

function diminish() {
    console.log('a')
    document.getElementById('comment').style.transform = 'translate(-50%,-50%) scale(0.01, 0.01)'
    document.getElementById('comment').style.visibility = 'hidden'
    document.getElementById('container').style.opacity = 1
}

window.addEventListener('scroll', animation);
var items = document.querySelectorAll('#mainimgcontainer')

function animation() {
    for (var i = 0; i < items.length; i++) {
        if (elementInViewport(items[i])) {
            items[i].classList.add('inview')
        }
    }
}

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

function iframe1() {
    document.getElementsByTagName('iframe')[0].src = 'https://www.youtube.com/embed/U9g5B7x6u6s?autoplay=1'
}

function iframe2() {
    document.getElementsByTagName('iframe')[1].src = 'https://www.youtube.com/embed/FC5GwGRIpA0?autoplay=1'
}

function iframe3() {
    document.getElementsByTagName('iframe')[2].src = 'https://www.youtube.com/embed/274YIeuADrk?autoplay=1'
}

function iframe4() {
    document.getElementsByTagName('iframe')[3].src = 'https://www.youtube.com/embed/CwepoyYTBdk?autoplay=1'
}

function iframe5() {
    document.getElementsByTagName('iframe')[4].src = 'https://www.youtube.com/embed/kfvXn1RMRpY?autoplay=1'
}
