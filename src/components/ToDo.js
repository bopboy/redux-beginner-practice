import React from 'react'
import { connect } from 'react-redux'
import { actionCreatros } from '../store'

function ToDo({ text, onBtnClick }) {
    return (
        <li>
            {text} <button onClick={onBtnClick}>Del</button>
        </li>
    )
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreatros.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo)