'use strict';

var appRoot = document.getElementById('app');
var appTitle = document.getElementById('app-title');

// JSX template
var app = {
    title: 'Indecision app',
    subtitle: 'Make it easy to organize tasks',
    options: ['one item', 'two item']
};
var renderList = function renderList(list) {
    return list.map(function (item) {
        return React.createElement(
            'li',
            null,
            item
        );
    });
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title.toUpperCase()
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 ? React.createElement(
        'div',
        null,
        'Here are your options ',
        React.createElement(
            'ol',
            null,
            renderList(app.options)
        ),
        ' '
    ) : React.createElement(
        'p',
        null,
        'There is no options'
    )
);

var user = {
    name: 'Andry Marcel',
    age: 25,
    location: "Madagascar"
};
var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location.toUpperCase()
        );
    }
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    user.age > 26 && React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    getLocation(user.location)
);

ReactDOM.render(template, appTitle);
ReactDOM.render(templateTwo, appRoot);
