import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
//import DataCalendar from '../ScheduleCalendar/DataCalendar'; 
import NavBar from '../Modules/NavBar';

import {
    Scheduler,
    WeekView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
  } from '@devexpress/dx-react-scheduler-material-ui';


 export default class CalenderComponents extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [
            {
                title: 'Meeting with Mitch',
                startDate: new Date(2021, 5, 25, 9, 35),
                endDate: new Date(2021, 5, 25, 11, 30),
                id: 0,
                location: 'San Francisco',
              }
        ],
        currentDate: '2021-07-15',
      };
      this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
    }
  
    render() {
      const { data, currentDate } = this.state;
  
      return (
        <div className="setUp-Schedule-wrapper">
            <NavBar/>
            <div className="setUp_Schedule-containerOne">
                <Paper>
                <Scheduler
                    data={data}
                    height={660}
                >
                    <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={this.currentDateChange}
                    />
                    <WeekView
                    startDayHour={9}
                    endDayHour={19}
                    />
                    <Toolbar />
                    <DateNavigator />
                    <TodayButton />
                    <Appointments />
                </Scheduler>
                </Paper>
            </div>
        </div>
      );
    }
  }
