const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision app',
    subtitle: 'Make it easy to organize tasks',
    options:[]
}
const renderList = (list) => list
    .filter(item => item && item.length > 0)
    .map((item, index) => <li key={index}>{item}</li>);

const onSubmitForm = (e) => {
    // normally a submit form will refresh the page and add an url parameter if the method is not a POST ...?option = value
    e.preventDefault()
    
    // 1/ access the option textfiekd, e.target here is the element that triggered this method
    // 2/ e.target has elements property that has it child contents 
    // 3/ the name of the element can be reached only by getting its name (here :: option)
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderAppRoot();
    }
}

const removeAll = () => {
    app.options = []
    renderAppRoot();
}

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
    alert(option);
}

const renderAppRoot = () => {
    const template = (
        <div>
            <h1>{app.title.toUpperCase()}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>There are no options, please add one or more</p>}
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove All</button><br/>
            <ol>{renderList(app.options)}</ol>
            <form onSubmit={onSubmitForm}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}
// JSX template
renderAppRoot();
