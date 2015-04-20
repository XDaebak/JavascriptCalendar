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
            $(document).ready(function () {
                // page is now ready, initialize the calendar...
                $('#calendar').fullCalendar({
                    // put your options and callbacks here
                })
            });
        </script>
    </head>
    <body>
        <h1>Hello World!</h1>
        <div id='calendar'></div>
    </body>
</html>
