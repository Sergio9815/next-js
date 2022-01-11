import React from 'react'
const TodoContext = React.createContext();

function TodoProvider (props) {
  const [theme, setTheme] = React.useState(true);
  
  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <TodoContext.Provider value={{
      theme, 
      setTheme,
      changeTheme,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
