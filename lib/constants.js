export const PROPERTIES = [
    { name: 'innerWidth',  event: 'resize', defaultValue: 0 },
    { name: 'innerHeight', event: 'resize', defaultValue: 0 },
];

export const EVENTS = PROPERTIES.reduce((acc, { event }) => {
    return acc.includes(event)
        ? acc
        : [...acc, event];
}, []);
