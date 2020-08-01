'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addOne = _this.addOne.bind(_this);
        _this.minusOne = _this.minusOne.bind(_this);
        _this.resetCount = _this.resetCount.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'addOne',
        value: function addOne() {
            // this.state.count = this.state.count + 1;
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
            console.log(this.state);
        }
    }, {
        key: 'minusOne',
        value: function minusOne() {
            alert('minus');
        }
    }, {
        key: 'resetCount',
        value: function resetCount() {
            alert('reset');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count : ',
                    this.state.count,
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: this.addOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.resetCount },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
