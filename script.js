var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'green';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        // green
        body.style.backgroundColor = '154734';
    } else if (scroll >= 600 && scroll < 1000) {
        // yellow
        body.style.backgroundColor = '#f6faf9';
    } else if (scroll >= 1000 && scroll < 1800) {
        // blue
        body.style.backgroundColor = 'pink';
    } else if (scroll >= 1800 && scroll < 2500) {
        // orange
        body.style.backgroundColor = '#14208f';
    } else if (scroll >= 2500 && scroll < 3000) {
        // red
        body.style.backgroundColor = '#154734';
    } else {
        // purple
        body.style.backgroundColor = '#154734';
    }
}