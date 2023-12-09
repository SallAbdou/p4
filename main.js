import './modal.css'
import { modalBtn, modalbg, btnClose, firstName, lastName, aEditNav, form, myTopNav } from './components/domLinker';



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
  console.log('formulaire soumis')
}

const isAlphaWithTwoDigit = value => /^([a-zA-Z]){2,}$/.test(value)

const editNav = () => {
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
  } else {
    myTopNav.className = "topnav";
  }
}

// const testName = () => lastName.parentNode.setAttribute('data-error-visible', !isAlphaWithTwoDigit(lastName.value))
// const testFirstName = () => firstName.parentNode.setAttribute('data-error-visible', !isAlphaWithTwoDigit(firstName.value))
const testNameAndFirst = inputElement => inputElement.parentNode.setAttribute('data-error-visible', !isAlphaWithTwoDigit(inputElement.value)) 