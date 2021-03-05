import React from 'react'
import './App.css'
import Forms from "./components/Forms";
import Graphs from "./components/Graphs";
import Header from "./components/Header";

const App = () => (
      <div className="App">
          <Header />
          <Graphs />
          <Forms />
      </div>
  )

export default App
