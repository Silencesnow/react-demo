/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';


class Greeting extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello,{this.props.name.color}</h1>
                <h1>Hello,{this.props.name.fontSize}</h1>
            </div>
        )
    }
}

Greeting.propTypes = {
    name:PropTypes.shape({
        color:PropTypes.string,
        fontSize:PropTypes.number
    })
}
const NAME={
    color:"white",
    fontSize:12
}
// ========================================

ReactDOM.render(
 <Greeting name={NAME} />,
 document.getElementById('root')
);
