import { useState } from 'react'
import CenteredTabs from './components/CenteredTabs'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CenteredTabs/>
      <Table/>
    </div>
  )
}

export default App
