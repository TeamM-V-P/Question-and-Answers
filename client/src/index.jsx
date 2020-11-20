/* eslint-disable import/order */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.render(<App />, document.getElementById('service3'));
