import { BrowserRouter } from 'react-router-dom';
import Router from './routes/routes';
import Navigation from './components/Navigation/Navigation';

import { motion } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-[100vh] overflow-hidden">
        <Navigation />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center py-10"
        >
          Project is using React Lazy loading and falls back to a position fixed loading screen whilst the new
          components are loading for the first time
        </motion.div>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
