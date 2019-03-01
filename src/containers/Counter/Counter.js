import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
        return this.state.counter;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.results.map(res => (
            <li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>
              {res.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ counter, results }) => ({ counter, results });

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
  onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
  onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
  onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
  onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
  onDeleteResult: id =>
    dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
