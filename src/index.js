import { createStore } from 'redux'

const add = document.getElementById('add')
const sub = document.getElementById('sub')
const number = document.querySelector('span')

number.innerText = 0

const countModifier = (count = 0, action) => {
  console.log(count, action)
  if (action.type === 'ADD') return count += 1
  else if (action.type === 'SUB') return count -= 1
  else return count
}
const countStore = createStore(countModifier)
const onChange = () => { number.innerText = countStore.getState() }
countStore.subscribe(onChange)

add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }))
sub.addEventListener('click', () => countStore.dispatch({ type: 'SUB' }))