import { createStore } from 'redux'

const add = document.getElementById('add')
const sub = document.getElementById('sub')
const number = document.querySelector('span')

number.innerText = 0
const ADD = "ADD"
const SUB = "SUB"

const countModifier = (count = 0, action) => {
  console.log(count, action)
  switch (action.type) {
    case ADD: return count + 1
    case SUB: return count - 1
    default: return count
  }
}
const countStore = createStore(countModifier)

const onChange = () => { number.innerText = countStore.getState() }
countStore.subscribe(onChange)

const handleAdd = () => { countStore.dispatch({ type: ADD }) }
const handleSub = () => { countStore.dispatch({ type: SUB }) }

add.addEventListener('click', handleAdd)
sub.addEventListener('click', handleSub)