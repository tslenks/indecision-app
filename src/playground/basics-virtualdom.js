// in index.html
/* <div id="example"></div>
 <div id="app-title"></div> --- */

const appTitle = document.getElementById('app-title')
const example =  document.getElementById('example')


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
let count = 0;
const addOne = () => { count++;  renderTemplateThree(); };
const minusOne = () => { count > 0 ? count-- : 0;  renderTemplateThree(); };
const resetCount = () => { count = 0; renderTemplateThree(); };

function renderTemplateThree() {
    const templateThree = (
        <div>
            <h1>count: {count} </h1>
            <button  onClick={addOne} id="count-btn" className="count-btn-cls">+1</button> 
            <button onClick={minusOne} id="decrement-btn" className="decrement-btn-cls">-1</button> 
            <button onClick={resetCount} id="reset-btn" className="reset-btn-cls">reset</button> 
        </div>
    )

    ReactDOM.render(templateThree, appRoot);
}
// ReactDOM.render(template, appTitle);
renderTemplateThree();
/*
{app.options && app.options.length > 0 
                ? <div>Here are your options <ol>{renderList(app.options)}</ol> </div> 
                : <p>There is no options</p>}  
*/

/**
 * if(!change) {
        e.target.innerHTML = 'Hide details';
        paragraph.innerHTML = "These are some details that you can see"
        change = true;
    } else {
        e.target.innerHTML = 'Show details';
        paragraph.innerHTML = ""
        change = false;
    }
 */