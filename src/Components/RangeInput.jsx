import React, { Component } from "react";



class RangeInput extends Component {
    state = { value: 0 };
    onChange = (event) => {
        const value = event.target.value
        this.setState({ value: value });
    }
    render() {
        return (
            <div className='input-range'>
                <input type='range' onChange={this.onChange} value={this.state.value}></input>
                <input type='text' placeholder={this.state.value}></input>
            </div>
        )
    }
};

export default RangeInput;