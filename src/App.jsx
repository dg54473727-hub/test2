
import './App.css'
import Header from './components/header'
import Body from './pages/body'
import './index.css'
import Top10 from './components/top10'
import ArtistTop10 from './components/artisttop10'

function App() {

  return (
    <>
    <Header/>
    <Body/>
    <div id="song">
      <Top10/>
    </div>
    <div id="artist">
      <ArtistTop10/>
    </div>
    
    
    </>
  )
}

export default App
