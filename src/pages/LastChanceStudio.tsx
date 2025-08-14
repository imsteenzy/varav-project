import EmailRestAPI from '../components/EmailRestAPI';
import { Signature } from '../components/Signature';
import '../App.css';
function App() {
  return (
    <div className="App">
      <EmailRestAPI />
   <Signature name="©L' CHANCE 2025 · Varav " color="white" status="Meşgul" isDarkMode={true} />
    </div>
  );
}

export default App;