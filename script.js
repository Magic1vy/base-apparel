const form = document.querySelector('form');
const emailInput = document.querySelector('#input');
const iconError = document.querySelector('.icon-error');
const msgError = document.querySelector('.msg-error');
const button = document.querySelector('button');
const formField = document.querySelector('.form-field');
const msgSubmit = document.querySelector('.msg-submit');
const invalidEmail = document.querySelector('.invalid-email');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = emailInput.value;

  if (validateEmail(email)) {
    formField.style.display = 'none';
    invalidEmail.style.display = 'none';
    msgSubmit.style.display = 'block';
  } else {
    emailInput.style.border = '1px solid #F96464';
    button.style.border = '1px solid #F96464';
    button.style.background = 'rgba(237, 162, 103, 0.5)';
    iconError.style.display = 'block';
    msgError.style.display = 'block';
  }
});

if (window.innerWidth >= 1030) {
    gsap.from(".logo",{
      opacity: 0,
      ease: "none",
      duration:5,
    });

    gsap.from(".picture",{
        opacity: 0,
        ease: "none",
        duration: 2,
      });
  }
