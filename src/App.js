import './App.css';
import { ChildOne } from './component/ChildOne';
import { ChildTwo } from './component/ChildTwo';

function App() {
  return (
    <div className="App">
      <h1>Parent</h1>
      <div className='children'>
        <ChildOne />
        <ChildTwo />
      </div>
    </div>
  );
}

export default App;
