import React from 'react';
import ReactDOM from 'react-dom';

import {App,Basenavele,Header} from './App';


import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
      <Header />
    </React.StrictMode>,
  
    document.getElementById('header')
  );

ReactDOM.render(
<React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
      <Basenavele />
    </React.StrictMode>,
  
    document.getElementById('footer')
  );

reportWebVitals();





