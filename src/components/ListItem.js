import React from 'react';
//que9
const ListItem = ({todo , id}) => {

    return (<ul><li onClick={(e)=>{console.log({id})}}>{todo}</li></ul>)
      
    
  };
  
  export default ListItem