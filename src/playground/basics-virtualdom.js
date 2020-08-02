/*
// 1st method
const appTitle = document.getElementById('app-title')
const example =  document.getElementById('example')
const appRoot = document.getElementById('app')

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

renderTemplateThree();
*/

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.state = {
            count: 0 // props.count
        };
    }

     /** @inheritdoc */
     componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);
            if(!isNaN(count)){
                this.setState(() => ({ count: parseInt(count, 10) }));
            }
        } catch(e) { }
    }

    /** @inheritdoc */
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
            console.log('saved');
        }
    }

    addOne() {
        // this.state.count = this.state.count + 1;
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })
        console.log(this.state);
    }

    minusOne() {
        // this.setState((prevState) => ({count: prevState.count <= 0 ? 0 : prevState.count - 1 }))
        this.setState((prevState) => ({count: prevState.count - 1 }))
        console.log(this.state);
    }

    resetCount() {
        this.setState(() => {
            return {
                count: 0
            };
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}

/*Counter.defaultProps = {
    count: 0
};*/

ReactDOM.render(<Counter />, document.getElementById('app'))