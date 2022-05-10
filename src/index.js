import { createStore } from 'redux'

const add = document.getElementById('add')
const sub = document.getElementById('sub')
const number = document.querySelector('span')

const countModifier = (count = 0, action) => {
  console.log(count, action)
  if (action.type === 'ADD') return count += 1
  else if (action.type === 'SUB') return count -= 1
  else return count
}
const countStore = createStore(countModifier)
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "SUB" })
countStore.dispatch({ type: "SUB" })
countStore.dispatch({ type: "SUB" })
countStore.dispatch({ type: "SUB" })
countStore.dispatch({ type: "SUB" })
countStore.dispatch({ type: "SUB" })
countStore.dispatch({ type: "SUB" })
console.log(countStore.getState())