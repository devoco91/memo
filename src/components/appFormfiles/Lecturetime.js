import React, {useState} from 'react';


const Lecturetime = () => {
  const [usersData, setTime]=useState({timeOfStudy:'' })
  return <div className="modeofstudy-container">
 <div>
    <label for="D">Mode of study</label>
    <div className="sub1">
        <div>
            <input type="radio" name="level1" value="D0" id="D0"/>
            <label for="D0">Weekdays</label>
             <div className="sub255">
                <div className="display-time">
                    <input type="radio" name="level2" value={usersData.timeOfStudy} onChange={e=> setTime({timeOfStudy:e.target.value})} id="D10"/>
                    <label for="D10">9am - 2pm</label>
                </div>
                <div className="display-time">
                    <input type="radio" name="level2" value={usersData.timeOfStudy} onChange={e=> setTime({timeOfStudy:e.target.value})} id="D11"/>
                    <label for="D11">3pm - 6pm</label>
                </div>
            </div>
        </div>
        <div>
            <input type="radio" name="level1" value={usersData.timeOfStudy} onChange={e=> setTime({timeOfStudy:e.target.value})} id="D1"/>
            <label for="D1">Weekends</label>
            <div className="sub2">
                <div className="display-time">
                    <input type="radio" name="level2" value={usersData.timeOfStudy} onChange={e=> setTime({timeOfStudy:e.target.value})} id="D10"/>
                    <label for="D10">10am - 2pm</label>
                </div>
                <div className="display-time">
                    <input type="radio" name="level2" value={usersData.timeOfStudy} onChange={e=> setTime({timeOfStudy:e.target.value})} id="D11"/>
                    <label for="D11">3pm - 6pm</label>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>;
};

export default Lecturetime;
