import './index.css'

const TodoItem = props => {
  const {todoDetails, buttonToDelete} = props
  const {title, id} = todoDetails

  const deleteButton = () => {
    buttonToDelete(id)
  }

  return (
    <li className="todo-container">
      <p className="todoData">{title}</p>
      <button type="button" className="button" onClick={deleteButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
