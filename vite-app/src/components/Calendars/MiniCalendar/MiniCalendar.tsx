import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import {format} from 'date-fns/format';
import {parse} from 'date-fns/parse';
import {startOfWeek} from 'date-fns/startOfWeek';
import {getDay} from 'date-fns/getDay';
import {enUS} from 'date-fns/locale/en-US';

import styles from './MiniCalendar.module.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // base styles

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: { 'en-US': enUS },
});

type Event = { title: string; start: Date; end: Date };

interface Props {
    events: Event[];
    currentDate?: Date;
    onNavigate?: (date: Date) => void;
}

export default function MiniCalendar({
    events,
    currentDate = new Date(),
    onNavigate,
}: Props) {
    const [date, setDate] = useState(currentDate);

    const handleNavigate = (newDate: Date) => {
        setDate(newDate);
        onNavigate?.(newDate);
    };

    const MiniToolbar = () => {
        const goTo = (action: 'PREV' | 'NEXT' | 'TODAY') => {
            let newDate = new Date(date);
            if (action === 'PREV') newDate.setMonth(newDate.getMonth() - 1);
            if (action === 'NEXT') newDate.setMonth(newDate.getMonth() + 1);
            if (action === 'TODAY') newDate = new Date();
            handleNavigate(newDate);
        };

        return (
            <div className={styles.toolbar}>
                <span className={styles.title}>
                    {format(date, 'LLLL yyyy', { locale: enUS })}
                </span>
                <div className={styles.navGroup}>
                    <button onClick={() => goTo('PREV')} className={styles.navButton}>&lt;</button>
                    <button onClick={() => goTo('NEXT')} className={styles.navButton}>&gt;</button>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <Calendar
                className={styles.calendar}
                localizer={localizer}
                events={events}
                date={date}
                onNavigate={(d) => handleNavigate(d)}
                views={['month']}
                view="month"
                components={{ toolbar: MiniToolbar }}
                popup
                selectable={false}
                showMultiDayTimes={false}
                dayPropGetter={() => ({ style: { padding: '4px' } })}
                eventPropGetter={() => ({ style: { backgroundColor: '#388e3c', color: 'white', fontSize: '0.75rem' } })}
                style={{ height: '100%' }}
            />
        </div>
    );
}
