import { Header } from './Components/Header'
import { Table } from './Components/Table'
import { Footer } from './Components/Footer'

import './App.css'

export function App() {
  
  return (
    <div>

      <Header />

      <main>
        <Table />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

