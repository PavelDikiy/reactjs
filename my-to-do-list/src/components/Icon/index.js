// # Core
import React, { PureComponent } from 'react';
import { string } from 'prop-types';


class Icon extends PureComponent {
  render() {
    const { type } = this.props;
    
    switch (type) {
      case 'coin':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle fill="#FFA623" cx="12" cy="12" r="12"></circle>
            <path d="M6.3,17.7 C3.2,14.6 3.2,9.5 6.3,6.4 C9.4,3.3 14.5,3.3 17.6,6.4" fill="#FFFFFF" opacity="0.5"></path>
            <path d="M17.7,6.3 C20.8,9.4 20.8,14.5 17.7,17.6 C14.6,20.7 9.5,20.7 6.4,17.6" fill="#FFFFFF" opacity="0.25"></path>
            <path d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 Z M12,20 C7.6,20 4,16.4 4,12 C4,7.6 7.6,4 12,4 C16.4,4 20,7.6 20,12 C20,16.4 16.4,20 12,20 Z" fill="#BF7D1A" fillRule="nonzero" opacity="0.5"></path>
          </svg>
        );

      default:
        return null;
    }
  }
}


Icon.propTypes = {
  type: string.isRequired,
};


export default Icon;
