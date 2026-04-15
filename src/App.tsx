import './App.css'
import { useLanguage } from './providers/LaungageContes'
 

const translations={
  en:'Hello',
  sp:'Hola',
  fr:'Bonjour'
} 
// let timer:number;
function App() {
  const  {language, changeLanguage}=useLanguage() as {
    language: keyof typeof translations;
    changeLanguage: (lang: string) => void;
  }
  return (
    <div className='card'>
     <label htmlFor='language-select'>Choos Language</label>
     <select name="" id="language-select" onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">
        English
      </option>
      <option value="sp">Spanish</option>
      <option value="fr">French</option>
     </select>
     <h4>{translations[language]}</h4>
    </div>
  )
}

export default App
