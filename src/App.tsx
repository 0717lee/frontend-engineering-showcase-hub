import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ControlPanel from './pages/ControlPanel'
import ProductProject from './pages/ProductProject'
import ExperimentProject from './pages/ExperimentProject'
import { type Language } from './i18n'

function App() {
  const [language, setLanguage] = useState<Language>('en')

  return (
    <Routes>
      <Route path="/" element={<Layout language={language} onLanguageChange={setLanguage} />}>
        <Route index element={<Home />} />
        <Route path="control-panel" element={<ControlPanel />} />
        <Route path="product-project" element={<ProductProject />} />
        <Route path="experiment-project" element={<ExperimentProject />} />
      </Route>
    </Routes>
  )
}

export default App
