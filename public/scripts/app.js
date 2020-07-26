'use strict';

var appRoot = document.getElementById('app');
// JSX template
var app = {
    title: 'Indecision app',
    subtitle: 'Make it easy to organize tasks',
    options: []
};
var renderList = function renderList(list) {
    return list.filter(function (item) {
        return item && item.length > 0;
    }).map(function (item, index) {
        return React.createElement(
            'li',
            { key: index },
            item
        );
    });
};

var onSubmitForm = function onSubmitForm(e) {
    // normally a submit form will refresh the page and add an url parameter if the method is not a POST ...?option = value
    e.preventDefault();

    // 1/ access the option textfiekd, e.target here is the element that triggered this method
    // 2/ e.target has elements property that has it child contents 
    // 3/ the name of the element can be reached only by getting its name (here :: option)
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderAppRoot();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderAppRoot();
};

var onMakeDecision = function onMakeDecision() {
    var random = Math.floor(Math.random() * app.options.length);
    var option = app.options[random];
    alert(option);
};

var renderAppRoot = function renderAppRoot() {
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
        app.options.length > 0 ? React.createElement(
            'p',
            null,
            'Here are your options'
        ) : React.createElement(
            'p',
            null,
            'There are no options, please add one or more'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement('br', null),
        React.createElement(
            'ol',
            null,
            renderList(app.options)
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmitForm },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderAppRoot();
