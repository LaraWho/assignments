var listContainer = document.getElementById("list-box")
var addNew = document.todo_form
var todoList = document.list_box
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
    var todoBox = document.createElement("section")
    var title = document.createElement("input")
    var para = document.createElement("input")
    var input = document.createElement("input")
    var deleteBtn = document.createElement("button")
    var editSaveBtn = document.createElement("button")
    deleteBtn.textContent = "delete"
    editSaveBtn.textContent = "edit"
    editSaveBtn.classList = "edit"
    title.type = "text"
    para.type = "text"
    
    input.type = "checkbox"
    input.className = "checkbox"
    input.name = "item"
    input.value = item.completed
    todoBox.className = "todo-item"
    
    input.addEventListener("click", updateComplete)
    
    deleteBtn.addEventListener("click", deleteItem)
    todoBox.id = item._id
    
    editSaveBtn.addEventListener("click", editSaveFn)

    title.className = "title-style"
    para.className = "para-style"
    title.name = "title"
    para.name = "para"
    title.disabled = "disabled"
    para.disabled = "disabled"

    title.value = `${item.title}`
    para.value = ` ${item.description}`

    listContainer.prepend(todoBox)
    todoBox.appendChild(title)
    todoBox.appendChild(input)
    todoBox.appendChild(para)
    todoBox.appendChild(deleteBtn)
    todoBox.appendChild(editSaveBtn)

          if(item.completed) {
            para.classList.add("checked")
            input.checked = true
          }

          if(item.imgUrl) {
            var image = document.createElement("img")
            var imgUrl = item.imgUrl
            image.src = imgUrl
            image.className = "todo-img"
            todoBox.appendChild(image)
          }
  })
}


editSaveFn = (e) => {
  e.preventDefault()
  // var updatedObj = {
  //   newTitle: addNew.title.value,
  //   newDesc: addNew.desc.value,
  // }
    e.target.parentNode.childNodes[0].toggleAttribute("disabled")
    e.target.parentNode.childNodes[2].toggleAttribute("disabled")
    e.target.parentNode.childNodes[0].classList.toggle("show-input")
    e.target.parentNode.childNodes[2].classList.toggle("show-input")
        
    e.target.parentNode.childNodes[4].textContent === "edit" ? e.target.parentNode.childNodes[4].textContent = "save" : e.target.parentNode.childNodes[4].textContent = "edit"
    
  axios.put(`https://api.vschool.io/lara/todo/${e.target.parentElement.id}`).then((response) => {
    console.log(todoList.title)
    console.log(e.target.parentNode.childNodes)
    e.target.parentNode.childNodes[0].value = updatedObj.newTitle
    e.target.parentNode.childNodes[2].value = updatedObj.newDesc
    
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
  var newTitle = addNew.todo_title.value
  var newDesc = addNew.todo_desc.value
  var newImg = addNew.todo_img.value
  
  axios.post("https://api.vschool.io/lara/todo", {
    title: newTitle,
    description: newDesc,
    imgUrl: newImg
    
  }).then((response) => {
    myList.push(response.data)
    renderList([response.data])

    addNew.todo_title.value = ''
    addNew.todo_desc.value = ''
    addNew.todo_img.value = ''

  }).catch((error) => {
    console.log(error)
  })
  e.preventDefault()
}

addNew.addEventListener("submit", postNewToDo)

updateComplete = (e) => {
  e.target.parentNode.childNodes[2].classList.toggle("checked")
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



