const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const toDos = []

const createTodo = toDo => {
  const li = document.createElement('li')
  li.innerText = toDo
  ul.append(li)
}
const onSubmit = e => {
  e.preventDefault()
  const toDo = input.value
  input.value = ''
  createTodo(toDo)
}
form.addEventListener('submit', onSubmit)