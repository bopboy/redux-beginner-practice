import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreatros } from '../store'

function ToDo({ text, onBtnClick, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick={onBtnClick}>Del</button>
            </Link>
        </li>
    )
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreatros.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo)