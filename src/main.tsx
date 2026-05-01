import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { LanguageProvider } from './providers/LaungageContes.tsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import Help from './Help.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/* <LanguageProvider> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/help" element={<Help />}  />
    
    </Routes>
    {/* </LanguageProvider> */}
    </BrowserRouter>

  </StrictMode>,
)
