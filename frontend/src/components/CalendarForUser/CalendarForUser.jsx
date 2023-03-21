import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'
import useAuth from '../../hooks/useAuth';

// const CalendarForUser = () => {
//     const handleDateClick = (userCalendar) => {
//         alert(`Date clicked: ${userCalendar.dateStr}`);
//     };

//     const handleEventClick = (info) => {
//         alert(`Event clicked: ${info.event.title}`);
//     };

//     const events = [
//         {title: 'Event 1', date: '2023-03-22'},
//     {title: 'Event 2', date: '2023-03-25'}
//     ];
const CalendarForUser = () => {
    const [user, token] = useAuth()
    if (user){

        return ( <div className='CalendarForUser'>
        <FullCalendar
        // defaultView='dayGridMonth'
        // header={{
            //     left: 'prev,next today',
            //     center: 'title',
            //     right: 'dayGridMonth, timeGridWeek, timeGridDay' 
            // }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            />
    </div> );
    } return null
}

export default CalendarForUser;