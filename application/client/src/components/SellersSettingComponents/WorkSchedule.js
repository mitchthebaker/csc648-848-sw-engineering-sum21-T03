
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import ScheduleCalendar from '../ScheduleCalendar/CalenderComponents'; 



const SellerWorkScheduleSettings = () => {

  
   return (
    <div className="sellerWorkScheduleSettings-wrapper">
        <div className="sellerWorkScheduleSettings-firstContainer">
            <NavLink className="nav-link" to="/set-workSchedule"> Set your work schedule </NavLink>

        </div>
    </div>
   );
};



export default SellerWorkScheduleSettings;