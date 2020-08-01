/* let showDetails = false;
const appRoot = document.getElementById('app')

const toggleBtn = (e) => {
    showDetails = !showDetails;
    render();
};

const render = () => {
   const app =  (
        <div>
            <h1>VISIBILTY TOOGLE</h1>
            <button onClick={toggleBtn}>{showDetails ? 'Hide Details' : 'Show details'}</button>
            {showDetails && (
                <div>
                    <p>There are some details that you can see here</p>
                </div>
            )}
        </div>
    );
    
    ReactDOM.render(app, appRoot);
} 

render();

*/

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state = { visibility: false };
    }

    handleToogleVisibility() {
        this.setState(prevState => ({ visibility : !prevState.visibility }));
    }

    render() {
        return (
            <div>
                <h1>VISIBILTY TOOGLE</h1>
                <button onClick={this.handleToogleVisibility}>{this.state.visibility ? 'Show details' : 'Hide details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>There are some details that you can see here</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));