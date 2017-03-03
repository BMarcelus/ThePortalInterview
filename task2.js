/*

	name of event | date of event | start time | end time 

	some of the events have different formatting for the string
	it is usually 
		name: date start - end
	but one of them is
		name on date from start to end

	Im assuming that this doesn't really matter so much as the functionalitiy of the overlapping date and times,
		 since the prompt says to create a data structure that contians/represents all of the information
*/



function CallendarDate(month, day, year)
{
	this.month = month;
	this.day = day;
	this.year = year;
}
CallendarDate.prototype = {
	equals: function(other)
	{
		return this.month==other.month && this.day==other.day && other.year==this.year;
	},
	str: function()
	{
		
	}
}


function Event(name, date, start, end)
{
	this.name = name;
	this.date = date;
	this.start = start;
	this.end = end;
}
Event.prototype = {
	conflictsWith: function(other)
	{
		return this.date.equals(other.date) && ( (other.start >= this.start && other.start <= this.end) || (other.end >= this.start && other.end <= this.end));
	},
	str: function()
	{
		return name+ ": " + date.str() + " " + timeFromInt(start) + " - " + timeFromInt(end);
	}
}

function intFromTime(hours, minutes, pm)
{
	return (hours+12*pm)*60 + minutes;
}
function timeFromInt(totalMins)
{
	var hours = Math.floor(totalMins/60);
	var minutes = totalMins%60;
	var pm = hours>=12;
	if(hours>12)
	{
		hours-=12;
	}
	return hours+":"+totalMins+(pm ? "PM" : "AM");
}


function overlappingEvents(events)
{
	var result = [];
	for(var i =0;i<events.length;i++)
	{
		var event = events[i];
		for(var j = 0; j<events.length;j++)
		{
			if(j!=i && event.conflictsWith(events[j]))
			{
				result.push(event);
				break;
			}
		}
	}
	return result;
}


var main = function(){
	var events = [
		new Event("Interview at The Portal", new CallendarDate(2, 23, 2017), intFromTime(3,00,1), intFromTime(4,30,1)),
		new Event("Lunch with Cindy", new CallendarDate(2, 25, 2017), intFromTime(12,00,0), intFromTime(1,00,1)),
		new Event("Dinner with John", new CallendarDate(2, 24, 2017), intFromTime(5,0,1), intFromTime(5,30,1)),
		new Event("Conference", new CallendarDate(2, 24, 2017), intFromTime(11,0,0), intFromTime(5,30,1)),
	];

	events.push(new Event("Program", new CallendarDate(3,3,2017), intFromTime(6,0,1), intFromTime(10,0,1)));
	events.push(new Event("Do Homework", new CallendarDate(3,4,2017), intFromTime(10,0,0), intFromTime(12,0,0)));
	events.push(new Event("Sleep", new CallendarDate(3,4,2017), intFromTime(0,0,0), intFromTime(11,0,0)));
	events.push(new Event("Do Nothing", new CallendarDate(3,4,2017), intFromTime(11,0,0), intFromTime(4,0,1)));

	var overlaps = overlappingEvents(events);
	console.log(overlaps);

}

main();

















