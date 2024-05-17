import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <div>
        <Header data-testid='Header'/>
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
