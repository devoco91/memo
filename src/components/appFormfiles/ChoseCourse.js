import React, {useState} from 'react';












export const CourseContext = React.createContext()


const ChoseCourse = () => {
  const [usersData, setUsersData]=useState({course:""})

  return <div>
    <CourseContext.Provider value={usersData.course}>

    <label for="Course">Course:</label>
    <select name="Course" id="Course-select" placeholder="Course" >
    {/* <option>Frontend Development</option> */}
    <option value={usersData.course} onChange={e=> setUsersData({course:e.target.value})}>Frontend Development</option>
    <option value={usersData.course} onChange={e=> setUsersData({course:e.target.value})}>Backend Development</option>
    <option  value={usersData.course} onChange={e=> setUsersData({course:e.target.value})} >Fullstack Developement</option>
    <option  value={usersData.course} onChange={e=> setUsersData({course:e.target.value})} >UI/UX Course</option>
    <option  value={usersData.course} onChange={e=> setUsersData({course:e.target.value})} >App Development(IOS and HIOS)</option>
    <option  value={usersData.course} onChange={e=> setUsersData({course:e.target.value})} >Machine Learning</option>
    </select>
    </CourseContext.Provider>

  </div>;
};

export default ChoseCourse;
