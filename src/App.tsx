import { Header } from './Components/Header'
import { Table } from './Components/Table'
import { Footer } from './Components/Footer'

export function App() {
  
  return (
    <div>

      <header>
        <Header />
      </header>

      <main>
        <Table />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

