import { DebouncePage } from './debounce/DebouncePage.jsx';

function App() {
  // const [message, setMessage] = useState('');
  //
  // useEffect(() => {
  //   const fetchLocalServer = async () => {
  //     try {
  //       const response = await fetch('http://localhost:9005/api/hello');
  //       const data = await response.json();
  //       setMessage(data.message);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   void fetchLocalServer();
  // }, []);

  return (
    <div className="App">
      <h1>React + Node.js Example</h1>
      <DebouncePage />
    </div>
  );
}

export default App;
