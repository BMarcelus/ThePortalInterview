# ThePortalInterview

Summary

I wanted to store the data of the objects in a way that would make computation easy, but would also allow the objects to be easily displayed as strings in the same way that the problem presents them.

I created a class for a calendar date object that could store a Month, Day, and Year. This makes them easy to create based on the data we have. Because it is its own class, the dates can also see if two dates are equal just by comparing the month, day and year.

I created an event class that could take the name of the event, the date, and the start and end times.
This makes comparison of overlaps easy. Two events overlap if they are on the same calendar date, and the start or end of one of the events is in between the start and end of the other event.
If an event starts between the start and end of another event, then it is starting during another event and thus they overlap. 
If an event ends between the start and end of another event, then another event starts while it is still going on, so it overlaps.

If two events start at the same time, they overlap, so the start times must not be equal.
If two events end at the same time, they overlap, so the end times must not be equal.
It is ok if an event starts at the exact same time that another event ends, and vice versa.

This brings the algorithm that I wrote
this.date.equals(other.date) && ( (other.start >= this.start && other.start < this.end) || (other.end > this.start && other.end <= this.end))

It compares the start and end times as integer values that is equal to the number of minutes from 12:00 AM 
I use a function that turns hours, minutes, and pm arguments into this integer number. This makes it easier to translate the text sample data into the integers.


Brian Dizon