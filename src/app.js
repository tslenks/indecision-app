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