import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Star from './components/Star';

const Stars = (props) => {
  const count = props.count;

  return (
    <ul className='card-body-stars'>
      <Star count={count} />
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number,
};

Stars.defaultProps = {
  count: 0,
};

function App() {
  return (
    <>
      <Stars count={5} />
    </>
  )
}

export default App
