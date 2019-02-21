import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';
import axios from 'axios';
import _ from 'lodash';

const AsyncSelectTag = (props) => {

  const loadOptions = _.debounce((inputValue, callback) => {
    let arr = [], res;
    axios.get('http://jsonplaceholder.typicode.com/users/')
      .then((response) => {
        if (inputValue === '') {
          res = response.data;
        } else {
          res = (response.data || []).filter(i => {
            return i.username.toLowerCase().includes(inputValue.toLowerCase());
          });
        }
        arr = res.map(u => ({ value: u.id, label: u.username }));
        callback(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 1000);



  const handleInputChange = (inputValue) => {
    props.onChange(inputValue.label);
    return inputValue;
  };
  return (
    <div>
      <pre>input:"{props.inputValue}"</pre>
      <AsyncSelect
        value={{ label: props.inputValue }}
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onChange={handleInputChange}
      />
    </div>
  );

}

export default AsyncSelectTag;

AsyncSelectTag.defaultProps={
  inputValue:'',
  onChange:()=>{},
}

AsyncSelectTag.propTypes = {
  inputValue:PropTypes.string,
  onChange:PropTypes.func,
}