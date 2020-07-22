'use strict';

var appRoot = document.getElementById('app');
var appTitle = document.getElementById('app-title');

// JSX template
var app = {
    title: 'Indecision app',
    subtitle: 'Make it easy to organize tasks'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Taks 1 To do'
        )
    )
);

var user = {
    name: 'Andry Marcel',
    age: 34,
    Location: "Madagascar"
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        user.Location.toUpperCase()
    )
);

ReactDOM.render(template, appTitle);
ReactDOM.render(templateTwo, appRoot);
