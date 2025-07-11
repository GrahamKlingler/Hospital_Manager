// src/events.ts
export interface Event {
    title: string;
    start: Date;
    end: Date;
}

export const myEvents: Event[] = [
    {
        title: 'Morning Review',
        start: new Date(),                                           // now
        end: new Date(Date.now() + 30 * 60 * 1000),                 // +30 min
    },
    {
        title: 'Team Meeting',
        start: new Date(new Date().setHours(new Date().getHours() + 1, 0, 0, 0)),  // next hour, on the hour
        end: new Date(new Date().setHours(new Date().getHours() + 2, 0, 0, 0)),  // two hours from now
    },
    {
        title: 'Surgery',
        start: new Date(new Date().setHours(14, 30, 0, 0)),           // today at 2:30 PM
        end: new Date(new Date().setHours(16, 0, 0, 0)),            // today at 4 PM
    },
];
