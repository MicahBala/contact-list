import React from 'react';

function Calendar(props) {
  return (
    <div className="form-group md-col-6">
      <label htmlFor="dob">Date of Birth</label>
      <input
        id={props.id}
        name={props.name}
        value={props.value}
        type="date"
        className={props.className}
      />
    </div>
  );
}

export default Calendar;
