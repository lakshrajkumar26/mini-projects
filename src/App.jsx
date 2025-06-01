
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Counter from './pages/counter'
import Stopwatch from './pages/stopwatch'
import BmiCalculator from './pages/BmiCalculator'
import QuoteGenerator from './pages/QuoteGenerator'
import Weather from './pages/Weatherapp/Weather'
import NavBar from './pages/NavBar'
import ToDoList from './pages/ToDoList/ToDoList'
import Notes from './pages/NotesApp/Notes'
import Home from './pages/Home/Home'




function App() {


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/stopwatch' element={<Stopwatch/>} />
      <Route path='/bmicalculator' element={<BmiCalculator/>} />
      <Route path='/quotegenerator' element={<QuoteGenerator/>} />
      <Route path='/notes'  element = {<Notes/>} />
      <Route path='/weather'  element = {<Weather/>} />
       <Route path='/todolist' element={<ToDoList/>} />
       <Route path='/' element={<Home/>} />
    </Routes>
    
    </>
  )
}

export default App
