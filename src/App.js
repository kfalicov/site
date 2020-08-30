import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { AppBar } from './components/AppBar/AppBar';
import { IconButton } from './components/IconButton';
import { Switch } from './Icons';
import { useIntersection } from './components/Utils/useIntersection';

const DarkThemeButton = styled(IconButton)`
    margin-left: auto;
    position: absolute;
    right: 0;
    top: 0;
`;

const Content = styled.div`
    height: 100vh;
    position: relative;
    padding-top: 56px;
`;

const App = () => {
    const [theme, setTheme] = React.useState('dark');
    const [scrollRef, intersection] = useIntersection();
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppBar useSplash={!intersection.isIntersecting}>
                <DarkThemeButton
                    onClick={() => {
                        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
                    }}
                >
                    <Switch on={theme === 'light'} />
                </DarkThemeButton>
            </AppBar>
            <Content></Content>
            <div id="scrolltrigger" ref={scrollRef} style={{ height: 1 }}></div>
        </ThemeProvider>
    );
};

export default App;
