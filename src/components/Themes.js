export const baseTheme = {
    easing: {
        easeOutSine: 'cubic-bezier(0.61, 1, 0.88, 1)',
        easeInOutSine: 'cubic-bezier(0.37, 0, 0.63, 1)',
        easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',
    },
    duration: {
        snail: '240ms',
        slow: '140ms',
        medium: '100ms',
    },
    shadows: {
        0: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
        1: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
};
export const lightTheme = {
    palette: {
        background: {
            default: '#FAFAFA',
            hover: '#0000000A',
            focus: '#0000001F',
            active: '#0000008A',
            paper: '#FFF',
        },
        text: { default: '#000000DE', secondary: '#0000008A' },
    },
    ...baseTheme,
};
export const darkTheme = {
    palette: {
        background: {
            default: '#303030',
            hover: '#FFFFFF14',
            focus: '#FFFFFF1F',
            active: '#FFFFFF8A',
            paper: '#424242',
        },
        text: { default: '#FFF', secondary: '#FFFFFFB3' },
    },
    ...baseTheme,
};
