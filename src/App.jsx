import './App.css'
import InputCheckBox from './components/inputCheckbox'

function App() {

  return (
  <main>
    <section>
      <InputCheckBox title="All Pages" attribute="all-pages"/>
    </section>
    <div className="line"></div>
    <section>
      <InputCheckBox title="Page 1" attribute="page-1"/>
      <InputCheckBox title="Page 2" attribute="page-2"/>
      <InputCheckBox title="Page 3" attribute="page-3"/>
      <InputCheckBox title="Page 4" attribute="page-4"/>
    </section>
    <div class="line"></div>
    <section>
      <button type="button">Done</button>
    </section>
  </main>      
  )
}

export default App
