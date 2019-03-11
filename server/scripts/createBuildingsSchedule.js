const allCourseSchedule = require('../asset/schedule.json');
const fs = require('fs');
const buildings = {};

for (let course of allCourseSchedule) {
  if (buildings[course.building] === undefined) buildings[course.building] = {};
  if (buildings[course.building][course.room] === undefined)
    buildings[course.building][course.room] = [];
  delete course.start_date;
  delete course.end_date;
  delete course.is_tba;
  delete course.is_cancelled;
  delete course.is_closed;
  buildings[course.building][course.room].push(course);
}

fs.writeFileSync('../asset/BuildingsAvailability.json', JSON.stringify(buildings));
