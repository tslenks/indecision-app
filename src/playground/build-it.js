let showDetails = false;
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
