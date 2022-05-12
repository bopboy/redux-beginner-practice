import { createAction, createReducer } from '@reduxjs/toolkit'
import { createStore } from 'redux'

const addToDo = createAction('ADD')
const deleteToDo = createAction('DELETE')

const reducer = createReducer([], {
    [addToDo]: (state, action) => { state.push({ text: action.payload, id: Date.now() }) },
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
})
// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type: return [{ text: action.payload, id: Date.now() }, ...state]
//         case deleteToDo.type: return state.filter(toDo => toDo.id !== action.payload)
//         default: return state
//     }
// }
const store = createStore(reducer)

export const actionCreatros = {
    addToDo, deleteToDo
}
export default store