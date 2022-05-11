import { createStore } from 'redux'


const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const toDos = []

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: return [{ text: action.text, id: Date.now() }, ...state]
    case DELETE_TODO: return []
    default: return state
  }
}
const store = createStore(reducer)

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = ''
  toDos.forEach(toDo => {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.innerText = 'Del'
    btn.addEventListener('click', dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.append(btn)
    ul.append(li)
  })
}

store.subscribe(paintToDos)

const addToDo = text => { return { type: ADD_TODO, text } }
const deleteToDo = id => { return { type: DELETE_TODO, id } }

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text))
}
const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id
  store.dispatch(deleteToDo(id))
}
const onSubmit = e => {
  e.preventDefault()
  const toDo = input.value
  input.value = ''
  input.focus()
  dispatchAddToDo(toDo)
}
form.addEventListener('submit', onSubmit)
