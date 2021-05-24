import React from 'react';
import List from './components/List'
// import ListItem from './components/ListItem'



// jsx
const App = () => {

  const todos = [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}]
  const todoo =todos.map((element,index)=>{
    return <List  key={index} todo={element.todo} id= {element.id} />
    // return <ListItem  key={index} todo={element.todo} index= {element.index} />
  })
  return  <div>
    <h1>Todo List</h1>
    {todoo}
    

  </div>
};

export default App