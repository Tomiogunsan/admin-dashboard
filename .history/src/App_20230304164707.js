import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={color}
    <div className="app">
      
    </div>
  );
}

export default App;
