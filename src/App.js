import React from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { AppBar } from './components/AppBar/AppBar';
import { IconButton } from './components/IconButton';
import { Switch } from './Icons';

const DarkThemeButton = styled(IconButton)`
    margin-left: auto;
    position: relative;
    align-self: start;
`;

const AppBarSpacer = styled.div`
    height: 100vh;
    position: relative;
`;

const App = () => {
    const [theme, setTheme] = React.useState('dark');
    const [ref, percentage] = useScrollPercentage();
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppBar scroll={(percentage - 0.5) * 2}>
                <DarkThemeButton
                    onClick={() => {
                        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
                    }}
                >
                    <Switch on={theme === 'light'} />
                </DarkThemeButton>
            </AppBar>
            <AppBarSpacer ref={ref} />
            <div style={{ width: '100%', height: '200vh' }}>What is Site?</div>
        </ThemeProvider>
    );
};

export default App;
