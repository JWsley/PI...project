document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
    });
    calendar.render();
  });


  var calendar = new Calendar(calendarEl, {
    plugins: [ bootstrap5Plugin ],
    themeSystem: 'Lux'
  });