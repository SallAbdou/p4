import './modal.css'
import { modalBtn, modalbg, btnClose, lastName, aEditNav, form } from './components/domLinker';

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

aEditNav.addEventListener('click', () => editNav())


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

btnClose.addEventListener('click', closingFunction)

//test closing button
function closingFunction() {

}

function testName() {
  if (lastName.value.length < 2) {
    console.log(lastName.parentNode)
    lastName.parentNode.setAttribute('data-error-visible', true)
  }
}

form.addEventListener('submit', event => {
  event.preventDefault()

  testName()

  console.log('formulaire soumis')
})