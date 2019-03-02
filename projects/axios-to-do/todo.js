var listContainer = document.getElementById("list-box")
var addNew = document.todo_form
var showEditField = false
var myList = []

axios.get("https://api.vschool.io/lara/todo").then((response) => {
  response.data.map((item) => {
    myList.push(item)
  })
  renderList(myList)   

}).catch((error) => {
  console.log(error)
})


renderList = (list) => {
  list.map((item) => {
    
    //Creating all the elements to hold the content for the individual to-dos
    var todoBox = document.createElement("form")
    var title = document.createElement("input")
    var para = document.createElement("input")
    var input = document.createElement("input")
    var deleteBtn = document.createElement("button")
    var editSaveBtn = document.createElement("button")

    // Adding attributes to the delete and edit buttons
    deleteBtn.textContent = "delete"
    deleteBtn.classList = "delete"
    editSaveBtn.textContent = "edit"
    editSaveBtn.classList = "edit"
    title.type = "text"
    para.type = "text"
    
    // Adding attributes to the input box
    input.type = "checkbox"
    input.className = "checkbox"
    input.name = "item"
    input.value = item.completed
    // Adding class name to the section element containing the todo information
    todoBox.className = "todo-item"
    
    // Adding eventListeners to the inputs and buttons
    input.addEventListener("click", updateComplete)
    
    deleteBtn.addEventListener("click", deleteItem)
    todoBox.id = item._id
    
    editSaveBtn.addEventListener("click", editSaveFn)

    // Adding attributes to the input elements, which will display the title and description of the todo
    title.className = "title-style"
    para.className = "para-style"
    title.name = "title"
    para.name = "para"
    title.disabled = "disabled"
    para.disabled = "disabled"
    title.value = `${item.title}`
    para.value = ` ${item.description}`

    // Adding all the elements to the DOM
    listContainer.prepend(todoBox)
    todoBox.appendChild(title)
    todoBox.appendChild(input)
    todoBox.appendChild(para)
    // If there's an image in the API then add an image element
    if(item.imgUrl) {
      var image = document.createElement("img")
      var imgUrl = item.imgUrl
      image.src = imgUrl
      image.className = "todo-img"
      todoBox.appendChild(image)
    } 
    // Add the edit/save and delete buttons
    todoBox.appendChild(editSaveBtn)
    todoBox.appendChild(deleteBtn)

    // Checking if an item has been marked as complete, if it is then add the class of "checked" which will add a strike-through text decoration
    if(item.completed) {
      para.classList.add("checked")
      title.classList.add("checked")
      input.checked = true
    }
  })
}


editSaveFn = (e) => {
  e.preventDefault()
    // Toggling disabled attribute on input boxes to allow editing. Also toggling style so input box becomes visible.
    e.target.parentNode.childNodes[0].toggleAttribute("disabled")
    e.target.parentNode.childNodes[2].toggleAttribute("disabled")
    e.target.parentNode.childNodes[0].classList.toggle("show-input")
    e.target.parentNode.childNodes[2].classList.toggle("show-input")
        
    // Dynamic rendering of button text content
    e.target.parentNode.childNodes[4].textContent === "edit" ? e.target.parentNode.childNodes[4].textContent = "save" : e.target.parentNode.childNodes[4].textContent = "edit"
    

  axios.put(`https://api.vschool.io/lara/todo/${e.target.parentElement.id}`, {
    title: e.target.parentNode.childNodes[0].value,
    description: e.target.parentNode.childNodes[2].value
  }).then((response) => {
    console.log(response.data)
  }).catch((error) => {
    console.log(error)
  })
}


deleteItem = (e) => {
  axios.delete(`https://api.vschool.io/lara/todo/${e.target.parentElement.id}`).then(() => {
    e.target.parentElement.remove()
  }).catch((error) => {
    console.log(error)
  })
  e.preventDefault()
}

postNewToDo = (e) => {
  var title = addNew.todo_title.value
  var description = addNew.todo_desc.value

  // If no image URL is inputted by the user then add this beautiful image of Benedict Cumberbatch for them!
  if(addNew.todo_img.value === "") {
    var imgUrl = "https://akns-images.eonline.com/eol_images/Entire_Site/2018120/rs_600x600-180220042623-600.benedict-cumberbatch-omaze.22018.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90"
  } else {
    var imgUrl = addNew.todo_img.value
  }
  //change to object literal in post object
  axios.post("https://api.vschool.io/lara/todo", {
    title,
    description,
    imgUrl
    
  }).then((response) => {
    myList.push(response.data)
    renderList([response.data])

  // Resetting inputs after submit
  addNew.todo_title.value = ''
  addNew.todo_desc.value = ''
  addNew.todo_img.value = ''

  }).catch((error) => {
    console.log(error)
  })
  e.preventDefault()
}

// Add post method to the button in the form
addNew.addEventListener("submit", postNewToDo)


updateComplete = (e) => {
  // Checking off a todo as complete, updating the property in the API and toggling the style of the text elements.
  e.target.parentNode.childNodes[2].classList.toggle("checked")
  e.target.parentNode.childNodes[0].classList.toggle("checked")
  var bool = false
  if(e.target.value === "true") {
    bool = false
  } else {
    bool = true
  }
  axios.put(`https://api.vschool.io/lara/todo/${e.target.parentElement.id}`, {
    completed: bool
  }).then((response) => {
    console.log(response.data.completed)
  }).catch((error) => {
    console.log(error)
  })
}