import './App.css';

import DailyGrid from './components/DailyGrid';
import ActivityLog from './components/ActivityLog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DailyGrid/>
        <ActivityLog/>
      </header>
    </div>
  );
}

export default App;
