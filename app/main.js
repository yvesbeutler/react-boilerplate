import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/atoms/Counter';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('root')
    );
});