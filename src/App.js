import './App.css';
import { useEffect, useState } from 'react';

function Header() {
  const [ darkMode, setDarkMode ] = useState(false);

  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    
      if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])
  
  return (
    <header>
      <div id="toggle" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}>
        <div className="toggle-inner"/>
      </div>
    </header>
  )
}

function App() {
  return (
    <main>
      <Header />
      <div id="container">
        <h1>React Dark Mode</h1>
        <p> Create dark mode in React application using the useState and useEffect hooks.</p>
      </div>
    </main>
  );
}

export default App;