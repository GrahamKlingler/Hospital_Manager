import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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

    // 1 hour before now
    const min = new Date(now);
    min.setHours(min.getHours() - 1, 0, 0, 0);

    // 5 hours after now
    const max = new Date(now);
    max.setHours(max.getHours() + 4, 0, 0, 0);

    return (
        <div style={{overflow: 'hidden'}}>
            <Calendar
                localizer={localizer}
                events={events}
                toolbar={false}
                defaultView="day"
                views={['day']}
                step={30}
                timeslots={2}
                nowIndicator
                style={{ height: 400 }}
                min={min}
                max={max}
                scrollToTime={now}
            />
        </div>
    );
}
