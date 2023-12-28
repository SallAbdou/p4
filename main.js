import './modal.css'
import {
  modalBtn, modalbg, btnClose, firstName, lastName, aEditNav, form, myTopNav, emailAdd, birthdate,
  quantity, checkBox, validationMessage, radioFormData, formContainer, validateClose
} from './components/domLinker';

aEditNav.addEventListener('click', () => editNav())
btnClose.addEventListener('click', () => closeModal())
modalBtn.forEach((btn) => btn.addEventListener("click", () => launchModal()));
form.addEventListener('submit', event => validForm(event))
validateClose.addEventListener('click', () => closeModal());


const editNav = () => {
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
  } else {
    myTopNav.className = "topnav";
  }
}

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
  validationMessage.style.display = 'none';
  formContainer.style.display = "block";
  form.style.display = "block";
}

//message de confirmation
const showValidationMessage = () => {
  validationMessage.style.display = 'block';
  formContainer.style.display = 'block'; // 
  form.style.display = "none";
}

//closing button
const closeModal = () => modalbg.style.display = "none"


//pour verifier si une variable est du texte
const isAlphaWithTwoDigit = value => /^([a-zA-Z]){2,}$/.test(value)
//pour verifier si une variable est un mail
const isAMail = value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
// pour verifier que c'est bien un nombre positif
const isNumber = value => /^([0-9]){1,}$/.test(value)
const isValidDate = inputElement => new Date(inputElement.value) < new Date()

// Ici on a la verification du nom et prenom et attribution data error
const testNameAndFirst = inputElement => inputElement.parentNode.setAttribute('data-error-visible', !isAlphaWithTwoDigit(inputElement.value))
//verification du mail
const testMail = inputElement => inputElement.parentNode.setAttribute('data-error-visible', !isAMail(inputElement.value))

//verification de la birthdate et attribution data error
const testBirthdate = inputElement => {
  inputElement.parentNode.setAttribute('data-error-visible', !isValidDate(inputElement));
};

//pour vérifier que la valeur est numérique et attribution data error
const testQuantity = inputElement => inputElement.parentNode.setAttribute('data-error-visible', !isNumber(inputElement.value));

//vérifications des boutons radio 
const isRadio = () => Array.from(form.querySelectorAll('input[type="radio"]')).every(radio => !radio.checked);

//vérification des checkbox
const isCheckBox = () => checkBox.checked;



const isFormValid = () => {

  // testName()
  // testFirstName()
  testNameAndFirst(firstName)
  testNameAndFirst(lastName)
  testMail(emailAdd)
  testBirthdate(birthdate)
  testQuantity(quantity)
  //import de la vérfication de tous les boutons radios et attribution du data error
  radioFormData.setAttribute('data-error-visible', isRadio())
  //import de la vérification du checkbox et attribution du data error
  document.getElementById('checkbox1').parentNode.setAttribute('data-error-visible', !isCheckBox());


  //pour vérifier toutes les entrées du formulaires et submit
  console.log("isAlphaWithTwoDigit(firstName):", isAlphaWithTwoDigit(firstName.value))
  console.log("isAlphaWithTwoDigit(lastName):", isAlphaWithTwoDigit(lastName.value))
  console.log("isAMail(emailAdd):", isAMail(emailAdd.value))
  console.log("isValidDate(birthdate):", isValidDate(birthdate))
  console.log("isNumber(quantity):", isNumber(quantity.value))
  console.log("!isRadio():", !isRadio())
  console.log("isCheckBox():", isCheckBox())

  return (
    isAlphaWithTwoDigit(firstName.value) &&
    isAlphaWithTwoDigit(lastName.value) &&
    isAMail(emailAdd.value) &&
    isValidDate(birthdate) &&
    isNumber(quantity.value) &&
    !isRadio() &&
    isCheckBox()
  )

}

const validForm = e => {
  e.preventDefault()

  console.log('formulaire soumis')

  if (isFormValid()) {
    showValidationMessage()
    console.log("c'est ok")
  } else {
    console.log('ko')
  }
}