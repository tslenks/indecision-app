class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of computer';
        const options= ['Option 1', 'Option 2', 'Option 3']
        return  (            
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div> 
                <h1>{this.props.title}</h1>                          
                <h2>{this.props.subTitle}</h2>                
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('clicked')
    }

    render() {
        return (
            <div>                           
                <button onClick={this.handlePick}>What should I do</button>                
            </div>
        )
    }
}

class Options extends React.Component {

    // instead of using bind, we can use constructor  with the props
    constructor(props) {
        super(props);
        // ensure that the context is always correct
        this.handleRemovelAll = this.handleRemovelAll.bind(this);
    }

    handleRemovelAll() {
        // this is not binding to the class here, so we have to add the bind methods
        console.log(this.props.options)
        alert ('remove All btn');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemovelAll}> Remove All </button>
                {
                    <div>                        
                        {this.props.options.map(option => <Option key={option} optionText={option}/>)}
                    </div>
                }                
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div> {this.props.optionText} </div>
        )
    }

}

class AddOption extends React.Component {
    addOption(e) {
        e.preventDefault()
        const value = e.target.elements.option.value
        if(value.trim()) {
            alert(value)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}
const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)