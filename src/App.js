import './App.css';

import DailyGrid from './components/DailyGrid';
import ActivityLog from './components/ActivityLog';
import DailyStats from './components/DailyStats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DailyStats/>
        <DailyGrid/>
        <ActivityLog/>
      </header>
    </div>
  );
}

export default App;
