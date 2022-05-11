import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../store'

function Home({ toDos, dispatch }) {
    const [text, setText] = useState("")
    function onChange(e) { setText(e.target.value) }
    function onSubmit(e) {
        e.preventDefault()
        setText("")
        dispatch(addToDo(text))
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>{JSON.stringify(toDos)}</ul>
        </>
    )
}
function mapStateToProps(state) {
    return { toDos: state }
}
function mapDispatchToProps(dispatch) {
    return { dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)