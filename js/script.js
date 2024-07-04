const header = document.querySelector("header");
const downloadButton = document.querySelector("#downloadButton")



window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})


// GMAIL

const contactForm = document.getElementById('contact-form')
const userName = document.getElementById('name').value
const email = document.getElementById('email').value
const subject = document.getElementById('subject').value
const message = document.getElementById('message').value
contactForm.addEventListener("submit", (e) => {
	e.preventDefault()
    // Construct the mailto: URL
    var mailtoUrl = 'mailto:ralphmatthewmanabat@gmail.com?subject=' + encodeURIComponent(subject) + '&body=';
    mailtoUrl += 'Name: ' + encodeURIComponent(userName) + '%0D%0A';
    mailtoUrl += 'Email: ' + encodeURIComponent(email) + '%0D%0A';
    mailtoUrl += 'Message: ' + encodeURIComponent(message);

    // Open the user's default email client with the form data
    window.location.href = mailtoUrl;
})
