import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Timeline.module.css';

import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';

const locales = {
    'en-US': enUS,
};
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

type Event = {
    title: string;
    start: Date;
    end: Date;
};

interface Props {
    events: Event[];
}

export default function YourCalendar({ events }: Props) {
    const now = new Date();

    // beginning of current hour
    const min = new Date(now);
    min.setMinutes(0, 0, 0);

    // 5 hours after now
    const max = new Date(now);
    max.setHours(max.getHours() + 4, 0, 0, 0);

    // Filter events to only show those within the visible range
    const filteredEvents = events.filter(event => {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);
        
        // Show event if it overlaps with the visible time range
        return eventStart < max && eventEnd > min;
    });

    return (
        <div className={styles.container}>
            <Calendar
                localizer={localizer}
                events={filteredEvents}
                toolbar={false}
                defaultView="day"
                views={['day']}
                step={30}
                timeslots={2}
                nowIndicator
                className={styles.calendar}
                style={{ height: '25rem' }}
                min={min}
                max={max}
                scrollToTime={now}
            />
        </div>
    );
}
