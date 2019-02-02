var form = document.travel_form;


function submitForm(e) {
  e.preventDefault()
  
  var checkedFoods = []
    form.food.forEach(e => {
      return e.checked ? checkedFoods.push(` ${e.value}`) : null
    })

  swal({
    icon: 'success',
    className: 'myAlert',
    title: 'You\'re all set!',
    text: `First Name: ${form.first_name.value}
Last Name: ${form.last_name.value}
Age: ${form.age.value}
Gender: ${form.gender.value}
Destination: ${form.Destination.value}
Dietary Restrictions: ${checkedFoods}
`})
}

form.addEventListener('submit', submitForm)