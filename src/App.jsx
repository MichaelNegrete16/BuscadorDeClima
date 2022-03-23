import ClimaApp from './components/ClimaApp'
import { ClimaProvider } from './context/ClimaProvider'
function App() {

  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de clima</h1>
      </header>
      <ClimaApp/>
    </ClimaProvider>
  )
}

export default App
