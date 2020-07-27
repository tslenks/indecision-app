class IndecisionApp extends React.Component {
    render() {
        return  (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
        return (
            <div> 
                <h1>Indecision</h1>                          
                <h2>Put your life in the hands of computer</h2>                
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>                           
                <button>What should I do</button>                
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component
                <Option></Option> 
            </div>
        )
    }
}

class Option extends React.Component {
    render( ) {
        return (
            <div>
                Option component here
            </div>
        )
    }

}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}
const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)