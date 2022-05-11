import { createStore } from 'redux'


const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TODO: return []
    case DELETE_TODO: return []
    default: return state
  }
}
const store = createStore(reducer)

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
  // createTodo(toDo)
  store.dispatch({ type: ADD_TODO, text: toDo })
}
form.addEventListener('submit', onSubmit)