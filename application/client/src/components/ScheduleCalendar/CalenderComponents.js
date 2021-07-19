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
import { GiConsoleController } from 'react-icons/gi';


 export default class CalenderComponents extends React.PureComponent {





    constructor(props) {
      super(props);
  
      this.state = {
        data: [   
          {
            title: '',
            startDate: new Date(2021, 6, 15, 9, 35), 
            endDate:  new Date(2021, 6, 15, 12, 30),
            id: 0,
            location: '',
          }
        ],

        currentDate: '2021-06-14',
      };
      /*
      startDate: new Date(2021, 6, 15, 9, 35),
      endDate: new Date(2021, 6, 15, 12, 30),
      */
      this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
     // this.getDate = this.getDate.bind(this); 
    }

    /*
    getDate(str) {
      console.log("calling: " + str); 
      var format = "dd/mm/yyyy hh:ii:ss"; 
      var normalized     = str.replace(/[^a-zA-Z0-9]/g, '-');
      var normalizedFormat= format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
      var formatItems     = normalizedFormat.split('-');
      var dateItems       = normalized.split('-');
  
      var monthIndex  = formatItems.indexOf("mm");
      var dayIndex    = formatItems.indexOf("dd");
      var yearIndex   = formatItems.indexOf("yyyy");
      var hourIndex     = formatItems.indexOf("hh");
      var minutesIndex  = formatItems.indexOf("ii");
      var secondsIndex  = formatItems.indexOf("ss");
  
      var today = new Date();
  
      var year  = yearIndex>-1  ? dateItems[yearIndex]    : today.getFullYear();
      var month = monthIndex>-1 ? dateItems[monthIndex]-1 : today.getMonth()-1;
      var day   = dayIndex>-1   ? dateItems[dayIndex]     : today.getDate();
  
      var hour    = hourIndex>-1      ? dateItems[hourIndex]    : today.getHours();
      var minute  = minutesIndex>-1   ? dateItems[minutesIndex] : today.getMinutes();
      var second  = secondsIndex>-1   ? dateItems[secondsIndex] : today.getSeconds();
  
  
    return new Date(year,month,day,hour,minute,second);
  
  }
*/


  

    handleChange(event) {

      console.log(event.target.name)
      console.log(event.target.value)

      this.setState({
        [event.target.name]: event.target.value
      }); 



    //  console.log("title: " + this.state.title); 

     // console.log("start date: " + this.state.startDate); 
     // console.log("end date: " + this.state.endDate); 

     // console.log("location: " + this.state.location); 


     // console.log()
     // console.log(this.getDate(this.state.startDate)); 
  
  
    }

    handleSubmit(event) {
     const {title, startDate, endDate, location} = this.state;
     //const {title, location} = this.state;
     let scheduleData = { title: this.state.title, startDate: this.state.startDate, endDate: this.state.endDate, location: this.state.location };
     event.preventDefault();

     // let scheduleData = { title: title, startDate: startDate, endDate: endDate, location: location };
      //let scheduleData = { title: title, location: location };


      this.setState({
        data: [ scheduleData ] 
      });




      
    }
  
    render() {
      const { data, currentDate } = this.state;

  
      return (
        <div className="setUp-Schedule-wrapper">
            <NavBar/>
            <h1>Set Up Schedule</h1>
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
            <div className="setUp_Schedule-containerTwo">
              <h3>Todo Form</h3>
              <p>Title </p>
              <input name="title" value={this.state.title} onChange={this.handleChange} type="text"/>
              <p>Start Date</p>
              <input name="startDate" value={this.state.startDate} onChange={this.handleChange} type="text"/>
              <p>End Date</p>
              <input name="endDate" value={this.state.endDate} onChange={this.handleChange} type="text"/>
              <p>Location</p>
              <input name="location" value={this.state.location} onChange={this.handleChange} type="text"/>
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
        </div>
      );
    }
  }
