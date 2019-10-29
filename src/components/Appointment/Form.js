import React, { useState } from "react"
import InterviewerList from "components/InterviewerList"
import Button from "components/Button"

export default function Form (props) {
  // const [setName, setInterviewer] = useState("")
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || "");

  function reset() {
    setName("");
    setInterviewer(null)
  }
  
  return (
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off">
        <input
          className="appointment__create-input text--semi-bold"
          value={name}
          type="text"
          placeholder="Enter Student Name"
          onChange={event => setName(event.target.value)}
          onSubmit={event => event.preventDefault()}
          /*
            This must be a controlled component
          */
        />
      </form>
      <InterviewerList 
      interviewers={props.interviewers} 
      value={props.interviewers} 
      onChange={setInterviewer} 
      interviewer={interviewer}/>
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button onClick={reset} danger>Cancel</Button>
        <Button onClick={props.onSave} confirm>Save</Button>
      </section>
    </section>
  </main>
  )
}