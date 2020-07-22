const appRoot = document.getElementById('app')
const appTitle = document.getElementById('app-title')

// JSX template
const app = {
    title: 'Indecision app',
    subtitle: 'Make it easy to organize tasks',
    options:['one item', 'two item']
}
const renderList = (list) => list.map(item => <li>{item}</li>);
const template = (
    <div>
        <h1>{app.title.toUpperCase()}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options && app.options.length > 0 
            ? <div>Here are your options <ol>{renderList(app.options)}</ol> </div> 
            : <p>There is no options</p>}        
    </div>
);

const user = {
    name:'Andry Marcel',
    age: 25,
    location: "Madagascar"
};
const getLocation = (location) => {
    if(location) {
        return <p>Location: {location.toUpperCase()}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        {user.age > 26 && <p>Age : {user.age}</p> }
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, appTitle);
ReactDOM.render(templateTwo, appRoot);