class IndecisionApp extends React.Component {

    /** @inheritdoc */
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    /** @inheritdoc */
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options }));
            }
        } catch(e) { }
    }

    /** @inheritdoc */
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saved');
        }
    }

    /** @inheritdoc */
    componentWillUnmount() {
       
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: []} ));
    }

    handleDeleteOption(option) {
        console.log(option)
        this.setState((prevState) => ({ options: prevState.options.filter(item => item !== option)} ));
    }

    handlePick() {
        const randomKey = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomKey])
    }

    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of computer';        
        return  (            
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div> 
            <h1>{props.title}</h1>                          
            <h2>{props.subTitle}</h2>                
        </div>
    )
}

const Action = (props) => {
    return (
        <div>                           
            <button 
                onClick={props.handlePick} 
                disabled={!props.hasOptions}
            >
            What should I do
            </button>                
        </div>
    )
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All </button>
            {
                <div>               
                    {props.options.length === 0 && <p> Please add an option to get started </p>}         
                    {props.options.map(option => (
                            <Option 
                                key={option} 
                                optionText={option}
                                handleDeleteOption={props.handleDeleteOption}
                            />

                        ))}
                </div>
            }                
        </div>
    )
};

const Option = props => (
        <div>
            {props.optionText}
            <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>remove</button>
        </div>
);

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options:[]
}

const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)
