import React from 'react';
import ReactDOM from 'react-dom';
import { CoursesPage, LoginPage } from './pages/';

import './main.scss';

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
    {/*<CoursesPage />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

