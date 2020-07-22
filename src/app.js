const appRoot = document.getElementById('app')
const appTitle = document.getElementById('app-title')

// JSX template
const app = {
    title: 'Indecision app',
    subtitle: 'Make it easy to organize tasks'
}
const template = (
    <div>
        <h1>{app.title.toUpperCase()}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Taks 1 To do</li>
        </ol>
    </div>
);

const user = {
    name:'Andry Marcel',
    age: 34,
    Location: "Madagascar"
};
const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {user.Location.toUpperCase()}</p>
    </div>
);

ReactDOM.render(template, appTitle);
ReactDOM.render(templateTwo, appRoot);