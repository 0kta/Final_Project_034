// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

/* display background color black on navbar scroll */
.navbarScroll.navbarDark {
    background-color: black;
}

/* social media icons styling */
.social-icons {
    font-size: 36px;
    cursor: pointer;
}
.fa-facebook:hover,.fa-instagram:hover,.fa-twitter:hover,.fa-linkedin:hover, .fa-twitch:hover {
    color: #008000;
}
.fab {
    color: #000000;
}
/* footer styling */
#footer {
    background-color: #808080;
    text-align: center;
}