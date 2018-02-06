import React from 'react';
import PropTypes from 'prop-types';

const Weather = props => (
  <div>
    {props.city &&
      props.country && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Condidtions: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);
// TODO types
// TODO default props
Weather.propTypes = {
  city: '',
  country: '',
  temperature: '',
  humidity: '',
  description: '',
  error: ''
};

export default Weather;
