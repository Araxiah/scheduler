import React, { useState, useEffect } from "react";
import axios from "axios"
import "components/Application.scss";
import DayList from "components/DayList"
import Appointment from "components/Appointment"
import {getAppointmentsForDay, } from "helpers/selectors"
import useApplicationData from "../hooks/useApplicationdata"



export default function Application(props) {
  const {
    state,
    setState,
    bookInterview,
    deleteInterview,
    setDay
    
  } = useApplicationData();
  const appointments = getAppointmentsForDay(state, state.day);
  const schedule =  appointments.map((appointment) => {
    let interview = null
    if (appointment.interview) {
      interview = {
        student: appointment.interview.student,
        interviewer: state.interviewers[`${appointment.interview.interviewer}`]
      }
    }
    
    return (
      <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      day={state.day}
      state={state}
      onSave={setState}
      bookInterview={bookInterview}
      deleteInterview={deleteInterview}
      />
      );
    });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
  <DayList days={state.days} day={state.day} setDay={setDay} />
  </nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
     {schedule}
     {<Appointment className='last'/>}
      </section>
    </main>
  );
}
