import './modal.css'
import { modalBtn, modalbg, btnClose, firstName, lastName, aEditNav, form, myTopNav, emailAdd, birthdate, quantity } from './components/domLinker';



aEditNav.addEventListener('click', () => editNav())
btnClose.addEventListener('click', () => closeModal())
modalBtn.forEach((btn) => btn.addEventListener("click", () => launchModal()));
form.addEventListener('submit', event => validForm(event))





// launch modal form
const launchModal = () => modalbg.style.display = "block"
//closing button
const closeModal = () => modalbg.style.display = "none"

const validForm = e => {
  e.preventDefault()
  // testName()
  // testFirstName()
  testNameAndFirst(firstName)
  testNameAndFirst(lastName)
  testMail(emailAdd)
  testBirthdate(birthdate)
  testQuantity(quantity)
  //import de la vérfication de tous les boutons radios et attribution du data error
  form.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.parentNode.setAttribute('data-error-visible', isRadio());
  });
//import de la vérification du checkbox et attribution du data error
  document.getElementById('checkbox1').parentNode.setAttribute('data-error-visible', !isCheckBox());


  //fonction à terminer
  showValidationMessage()
  console.log('formulaire soumis')
}

//pour verifier si une variable est du texte
const isAlphaWithTwoDigit = value => /^([a-zA-Z]){2,}$/.test(value)
//pour verifier si une variable est un mail
const isAMail = value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)



const editNav = () => {
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
  } else {
    myTopNav.className = "topnav";
  }
}

// const testName = () => lastName.parentNode.setAttribute('data-error-visible', !isAlphaWithTwoDigit(lastName.value))
// const testFirstName = () => firstName.parentNode.setAttribute('data-error-visible', !isAlphaWithTwoDigit(firstName.value))

// Ici on a la verification du nom et prenom et attribution data error
const testNameAndFirst = inputElement => inputElement.parentNode.setAttribute('data-error-visible', !isAlphaWithTwoDigit(inputElement.value)) 
//verification du mail
const testMail = inputElement =>inputElement.parentNode.setAttribute('data-error-visible', !isAMail(inputElement.value))

//verification de la birthdate et attribution data error
const testBirthdate = inputElement => {
  const todayDate = new Date(inputElement.value);
  const tomorrowDate = new Date();
  tomorrowDate.setHours(0, 0, 0, 0);
  const isValidDate = !isNaN(todayDate.getTime()) && todayDate < tomorrowDate;
  inputElement.parentNode.setAttribute('data-error-visible', !isValidDate);
};

//pour vérifier que la valeur est numérique et attribution data error
const testQuantity = inputElement => inputElement.parentNode.setAttribute('data-error-visible', !Number(inputElement.value) && Number(inputElement.value) > 0);

//vérifications des boutons radio 
const isRadio = () => Array.from(form.querySelectorAll('input[type="radio"]')).every(radio => !radio.checked);

//vérification des checkbox
const isCheckBox = () => document.getElementById('checkbox1').checked;





//message de confirmation
const validationMessage = document.getElementById('validateMessage')
const showValidationMessage = () => {
  form.classList.add('confirmation');
  validationMessage.style.display = 'none';
}
