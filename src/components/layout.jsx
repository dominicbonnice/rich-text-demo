import React from "react";
import Helmet from 'react-helmet';

export default ({ children }) => (
  <div>
  	<Helmet title={'Rich Text Demo'} />
  	<div className="container">
    	{children}
    </div>
  </div>
);
