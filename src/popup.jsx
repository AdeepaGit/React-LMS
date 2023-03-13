import React from 'react';
import './profile.css';

function Popup(props) {
  return (props.trigger)? (
    <div className='popup'>
        <div className="popup-inner">
            <button className='close-btn btnn' onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup