import React from 'react';
import spinner from '../assets/spinner.svg';
import ReactDOM from 'react-dom';

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-100">
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>,
    document.getElementById('loading')
  );
};

export default Loading;
