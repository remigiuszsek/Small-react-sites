import './App.css';
import Nav from './components/Nav.js'
import TravelData from './components/TravelData.js'
import Main from './components/Main.js'

function App() {
  const data = TravelData.map((elem) => {
    return (
      <Main key={elem.id} img={elem.imageUrl} location={elem.location} title={elem.title} startDate={elem.startDate} endDate={elem.endDate} description={elem.description} />
    )
    
  })

  return (
    <div className="App">
      <Nav />
      {data}
    </div>
  )
}

export default App;
