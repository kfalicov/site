import React from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';
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

const AppBarSpacer = styled.div`
    height: calc(100vh);
    position: relative;
`;

const App = () => {
    const [theme, setTheme] = React.useState('dark');
    const [ref, percentage] = useScrollPercentage();
    const [scrollRef, intersection] = useIntersection();
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppBar scroll={percentage}>
                <DarkThemeButton
                    onClick={() => {
                        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
                    }}
                >
                    <Switch on={theme === 'light'} />
                </DarkThemeButton>
            </AppBar>
            <AppBarSpacer ref={scrollRef} />
            <div ref={ref} />
            <div style={{ width: '100%', height: '100vh' }}>
                What is Site?{`${intersection.isIntersecting}`}
            </div>
        </ThemeProvider>
    );
};

export default App;
