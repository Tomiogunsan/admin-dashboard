import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Css
    <div className="app">
      
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
