import './App.css';
import EventClass from './components/EventClass';
import StateClass from './components/StateClass';
import StateFunc from './components/StateFunc';

function App() {
  return (
    <div>
      <StateClass name="koo"/>
      <StateFunc />
      <EventClass />
    </div>
  );
}

export default App;
