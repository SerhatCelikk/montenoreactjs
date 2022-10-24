import React from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

const ButtonOne = () => {
  return (
        <Link to='/contact' className="btn-action">
            Join Now
        </Link>
  );
}

export default ButtonOne;