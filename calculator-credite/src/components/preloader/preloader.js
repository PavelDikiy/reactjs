import React from 'react';

const Preloader = () => (
  <div className="container center" style={{margin: 100 + 'px auto'}}>
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Preloader;