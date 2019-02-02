var form = document.travel_form;

function submitForm(e) {
  e.preventDefault()
  alert(`First Name: ${form.first_name.value}
Last Name: ${form.last_name.value}
Age: ${form.age.value}
`)
}

form.addEventListener('submit', submitForm)