import './App.css';
import Nav from './components/Nav.js'
import Main from './components/Main.js'
import Card from './components/Card.js'
import data from './components/data.js'

function App() {
  const dataReady = data.map(offer => {
    return <Card 
      key={offer.id} 
      {...offer}
    />
  })

  return (
    <div>
      <Nav />
      <Main />/
      <section className="cards-list">
        {dataReady}
      </section>
      
      
    </div>
  )
}

export default App
