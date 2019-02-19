import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class DateTimePickerTag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    console.log(date)
  }
  render() {
    return (
      <center>
        <DatePicker
          selected={this.state.startDate}
          onChange={(e)=>this.handleChange(e)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </center>
    )
  }
}

export default DateTimePickerTag;