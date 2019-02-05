var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");

function formAlert() {
    var firstName = form.first_name.value;
    var lastName = form.last_name.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.elements["travel-location"].value;

    var diets = [];
    form.diet.forEach(e => {
        if(e.checked) {
            diets.push(` ${e.value}`);
        }
    })

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diets + "\nAwesome, now if you die, it won't be an accident...");
}


submit.addEventListener("click", formAlert);