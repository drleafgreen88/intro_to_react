import React from 'react';    // 1️⃣
import './App.css';           // 2️⃣

function App() {              // 3️⃣
  const age = 34;
  const name = "Derek Leafgreen";  // 4️⃣
  
  return (                    // 5️⃣
  <div>
  <h1 className="title">Hello World!</h1>
  <p> This is a paragraph of text</p>
  <p> My name is {name} and I'm {age} years old!!! And I'm "murican!</p>
  </div>     // 6️⃣
  );                          // 7️⃣
}                             // 8️⃣

export default App;           // 9️⃣
