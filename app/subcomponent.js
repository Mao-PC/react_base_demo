import React from 'react';
import ReactDOM from 'react-dom';
import './subcomponent.less';

export default class Child extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            active: 1,
            no1color: '#ffffff',
            no2color: '#ffffff'
        };
    }

    componentWillReceiveProps (next) {
        if (this.state.active == 1) {
            this.setState({
                no1color: next.color
            })
        } else {
            this.setState({
                no2color: next.color
            })
        }
    }

    render () {
        return  <div className="children">
            <div className="child" 
                style={{
                    borderColor: this.state.active == 1 ? '#bb7621' : '#ffffff',
                    backgroundColor: this.state.no1color
                }}
                onClick={
                    () => this.setState({
                        active: 1
                    })
                }
            ></div>
            <div className="child" 
                style={{
                    borderColor: this.state.active == 2 ? '#bb7621' : '#ffffff',
                    backgroundColor: this.state.no2color
                }}
                onClick={
                    () => this.setState({
                        active: 2
                    })
                }
            ></div>
        </div>
    }
}