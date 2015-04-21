<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<link rel='stylesheet' href='fullcalendar/fullcalendar.css' />
<script src='fullcalendar/lib/jquery.min.js'></script>
<script src='fullcalendar/lib/moment.min.js'></script>
<script src='fullcalendar/fullcalendar.js'></script>
<script>
	$(document).ready(function() {
		// page is now ready, initialize the calendar...
		$('#calendar').fullCalendar({
			events : [ {
				title : 'Today',
				start : '2015-04-21'
			}, {
				title : 'This Week Event',
				start : '2015-04-22',
				end : '2015-04-25'
			}, {
				title : 'some random event',
				start : '2015-04-31T12:30:00',
				allDay : false
			// will make the time show
			} ]
		})
	});
</script>
</head>
<body>
	<h1>FullCalendar calendar rendered below</h1>
	<div id='calendar'></div>
	<script>
		
	</script>
</body>
</html>
