import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: []} ));
    };

    handleDeleteOption = (option) => {
        console.log(option)
        this.setState((prevState) => ({ options: prevState.options.filter(item => item !== option)} ));
    };

    handlePick = () => {
        const randomKey = Math.floor(Math.random() * this.state.options.length)
        const option  = this.state.options[randomKey]
        this.setState(() => ({
            selectedOption: option
        }));
    };

    clearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    /** @inheritdoc */
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of computer';        
        return  (            
            <div>
                <Header title={title} subTitle={subTitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption handleAddOption = {this.handleAddOption} />
                    </div>
                </div>
              
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    clearSelectedOption = {this.clearSelectedOption}
                />
            </div>
        );
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
    componentWillUnmount() { }

};

IndecisionApp.defaultProps = {
    options: []
};
