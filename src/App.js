import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { Banner } from './components/Banner';

const App = () => {
    const [theme, setTheme] = React.useState('dark');
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div>
                <Banner />
                <button onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}>
                    toggle theme
                </button>
            </div>
        </ThemeProvider>
    );
};

export default App;
