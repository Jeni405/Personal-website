// src/Counter.jsx
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = ({ count, increment, decrement }) => (
  <div className='text-center p-5'>
    <h1 className='mt-5 mb-10 text-3xl font-bold border border-gray-400 mx-48'>{count}</h1>
    <button onClick={increment} className='bg-gray-800 h-10 w-32 text-white mx-2 rounded-xl'>Increment ++</button>
    <button onClick={decrement} className='bg-gray-800 h-10 w-32 text-white mx-2 rounded-xl'>Decrement --</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
