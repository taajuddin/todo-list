import React from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/Pages/About'
import {v4} from 'uuid';
import './App.css'

class App extends React.Component{
  state={
       todos:[
            {
              id:v4(),
              title:'take me out',
              completed:false
            },
             {
              id:v4(),
              title:'go for dinner',
              completed:false
            },
             {
              id:v4(),
              title:'Meeting at lunch',
              completed:true
            }
        ]
      }
      //toggle todo
      markComplete =(id)=>{
        this.setState({todos:this.state.todos.map(todo =>{
          if(todo.id===id){
            todo.completed=!todo.completed
          }
          return todo;
        })
      })
      }
      //delete todo
      delTodo =(id)=>{
        this.setState({todos:[...this.state.todos.filter(todo=> todo.id !==id)]})
      }
      //add Todo
      addTodo=(title)=>{
        // console.log(title)
          const newTodo={
            id:v4(),
            title,
            completed:false
          }
          this.setState({todos: [...this.state.todos, newTodo]});
      }
  render(){
   return (
    <div className="App">
    <div className="container">
          <Header />
            <div>
                 <AddTodo  addTodo={this.addTodo}/>
               <Todos  todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </div>
            
         
    </div>
    </div>
  );  
  }
 
}

export default App;
