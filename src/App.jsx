import './App.css'
import { LoadingScreen } from './components/LoadingScreeen'
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}</>
  );
}

export default App
