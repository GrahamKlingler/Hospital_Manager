import 'react-big-calendar'

// “Merge” into the existing CalendarProps interface
declare module 'react-big-calendar' {
  interface CalendarProps<Event = any, ViewKey extends string = any> {
    /** show the red “now” time indicator line */
    nowIndicator?: boolean
  }
}
