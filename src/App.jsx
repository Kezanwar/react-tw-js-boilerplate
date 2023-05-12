import { BrowserRouter } from 'react-router-dom';
import Router from './routes/routes';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-[100vh]">
        <Navigation />
        <div className="flex justify-center py-10">
          Project is using React Lazy loading and falls back to a position fixed loading screen whilst the new
          components are loading for the first time
        </div>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
