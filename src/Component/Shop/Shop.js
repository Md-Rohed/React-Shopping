import React, { useState } from "react";
import CourseData from "../../Data/CourseData";
import Course from "../Course/Course";

export default function Shop() {
  const [course, setcourse] = useState(CourseData);

  return (
    <div>
      <div className="course-container">
        {course.map((course) => (
          <Course course={course}></Course>
        ))}
      </div>
    </div>
  );
}
