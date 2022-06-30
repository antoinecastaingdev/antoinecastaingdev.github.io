let phoneIcon = document.getElementById('main-contact-link-phone');
let mailIcon = document.getElementById('main-contact-link-mail');
let contactModal = document.getElementById('contact-modal');
let modalQuit = document.getElementById('modal-quit');

phoneIcon.addEventListener('click', () => {
    contactModal.style.visibility = 'visible';
});

mailIcon.addEventListener('click', () => {
    contactModal.style.visibility = 'visible';
});

modalQuit.addEventListener('click', () => {
    contactModal.style.visibility = 'hidden';
});