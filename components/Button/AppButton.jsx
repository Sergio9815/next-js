import React from 'react'
import styles from './button.module.scss';
import { TodoContext } from '../../context';

function AppButton() {
  const { theme, setTheme, changeTheme } = React.useContext(TodoContext);

  const toggleTheme = () => {
    changeTheme()
  }
  
  return (
      <button 
        className={ styles.button } 
        onClick={toggleTheme}
      >Dark</button>
  )
}

export default AppButton;
