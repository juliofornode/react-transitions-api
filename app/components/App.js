import React from 'react';
import {Link} from 'react-router';

const App = () => {
  return (
    <div>
      <Link to='css-transition-group'>High Level: React CSS Transition Group</Link><br/>
      <Link to='example-two'>Example Two</Link><br/>
      <Link to='transition-group'>Low Level: React Transition Group</Link><br/>
    </div>
  );
};

export default App;
