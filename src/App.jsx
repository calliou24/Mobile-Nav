
import Nav from './components/Nav/nav'
import Intro from './components/Intro/intro'

function App() {
  return (
    <div className="App">
      <div className="App-mask">
        <Nav/>
        <section className="content">
          <Intro/>
        </section>
      </div>
    </div>
  )
}

export default App
