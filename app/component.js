import React from 'react';
import ReactDOM from 'react-dom';
import Child from './subcomponent.js';
import './component.less';

export default class Hello extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            index: 0,
            subcolor: '#ffffff'
        };
	}

    childChangeColor = (index,color) => {
        this.setState({
            index: index,
            subcolor: color
        })
    }

    render () {
        const {index, subcolor} = this.state;
        return (
            <div>
                <div className="header">
                    <ul className="allcolors">
                        <li><div style={{backgroundColor : "#286090"}} onMouseOver={this.childChangeColor.bind(this,1,'#286090')}>1</div></li>
                        <li><div style={{backgroundColor : "#31b0d5"}} onMouseOver={this.childChangeColor.bind(this,2,'#31b0d5')}>2</div></li>
                        <li><div style={{backgroundColor : "#c9302c"}} onMouseOver={this.childChangeColor.bind(this,3,'#c9302c')}>3</div></li>
                        <li><div style={{backgroundColor : "#ec971f"}} onMouseOver={this.childChangeColor.bind(this,4,'#ec971f')}>4</div></li>
                        <li><div style={{backgroundColor : "#e6e6e6"}} onMouseOver={this.childChangeColor.bind(this,5,'#e6e6e6')}>5</div></li>
                    </ul>
                    <div className="header-right">index: {index}   color: {subcolor}</div>
                </div>
                <Child 
                    color={this.state.subcolor}
                />

            </div>
        )
    }
}