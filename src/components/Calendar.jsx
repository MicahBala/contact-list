import React from 'react';

function Calendar() {
  return (
    <div className="form-group md-col-6">
      <label htmlFor="dob">Date of Birth</label>
      <input id="dob" type="date" className="form-control" />
    </div>
  );
}

export default Calendar;
