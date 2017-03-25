import React from 'react'
import { observer, inject } from 'mobx-react'
import AddTodo from '../components/home/AddTodo'
import Todo from '../components/home/Todo'

@inject((all) => { return { todos: all.todos, common: all.todos }}) @observer
class Home extends React.Component {

  componentDidMount(){
    const { common, todos } = this.props;
    common.title = 'Home'
    todos.browse();
  }

  // When route is loaded (isomorphic)
  static onEnter({ todos, common }, params){
    common.title = 'Home'
    //return todos.browse();
  }

  handleReload = (e) => {
    e.preventDefault();
    const { todos } = this.props;
    todos.browse();
  };

  render(){
    const { todos } = this.props;
    return <main>
      <h1>todos</h1>
      <div className="home">
        <AddTodo/>
        <section className="main">
          <ul className="todo-list">
            {todos.items.map((item, index) =>{
              return <Todo key={index} item={item}/>
            })}
          </ul>
        </section>
        <button onClick={this.handleReload}>Reload</button>
      </div>
    </main>
  }
}

export default Home
