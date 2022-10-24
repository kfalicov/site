import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { AppBar } from './components/AppBar/AppBar';
import { IconButton } from './components/IconButton';
import { Switch } from './Icons';
import { usePopper } from 'react-popper';
import * as d3 from 'd3';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import Graph from './components/Graph';
// import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC2ZsSMoUSJHRHXrIubmz0FTQuTfKG_eq8',
    authDomain: 'site-by-kyle.firebaseapp.com',
    databaseURL: 'https://site-by-kyle.firebaseio.com',
    projectId: 'site-by-kyle',
    storageBucket: 'site-by-kyle.appspot.com',
    messagingSenderId: '311574117474',
    appId: '1:311574117474:web:e824e80be06935b7e4253b',
    measurementId: 'G-BJ9LRWZW6X',
};

const DarkThemeButton = styled(IconButton)`
    margin-left: auto;
    position: absolute;
    right: 0;
    top: 0;
`;

const Content = styled.div`
    overflow: hidden;
    height: 100vh;
    position: relative;
    padding-top: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Presentation = styled.div`
    position: fixed;
    inset: 0;
`;

const Popover = styled.div`
    background: ${({ theme }) => theme.palette.background.paper};
    padding: 8px;
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.shadows[1]};
    max-width: 328px;
    display: ${(props) => (props.anchorEl ? undefined : 'none')};
`;

const App = () => {
    const [theme, setTheme] = React.useState('dark');
    // const [scrollRef, intersection] = useIntersection();

    const [apps, setApps] = React.useState();

    React.useEffect(() => {
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        onValue(ref(db, 'projects'), (e) => {
            setApps(e.val());
        });
        // const analytics = getAnalytics(app);
    }, []);

    const openApp = React.useRef();
    const [anchorEl, setAnchorEl] = React.useState();
    const handleClick = React.useCallback(
        (e, index) => {
            const app = apps[index];
            openApp.current = app;
            setAnchorEl(e.currentTarget);
        },
        [apps]
    );

    const popperRef = React.useRef();
    const { styles, attributes, forceUpdate } = usePopper(anchorEl, popperRef.current);

    console.log(styles, attributes);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppBar useSplash={false}>
                <DarkThemeButton
                    onClick={() => {
                        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
                    }}
                >
                    <Switch on={theme === 'light'} />
                </DarkThemeButton>
            </AppBar>
            <Content>{apps && <Graph apps={apps} onNodeClick={handleClick} />}</Content>
            {anchorEl && (
                <Presentation
                    onClick={() => {
                        setAnchorEl(undefined);
                        forceUpdate();
                    }}
                />
            )}
            <Popover
                anchorEl={anchorEl}
                ref={popperRef}
                style={styles.popper}
                {...attributes.popper}
            >
                <div style={{ display: 'flex', gap: 8 }}>
                    <span style={{ fontSize: 32 }}>{openApp.current?.name}</span>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: 12,
                            gap: 4,
                            marginLeft: 'auto',
                        }}
                    >
                        {openApp.current?.live && <a href={openApp.current?.live}>Live</a>}
                        {openApp.current?.src && <a href={openApp.current?.src}>Source</a>}
                    </div>
                </div>
                <p>{openApp.current?.description}</p>
            </Popover>
        </ThemeProvider>
    );
};

export default App;
