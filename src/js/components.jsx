import React from 'react';
import ReactDOM from 'react-dom';

class QuoteBox extends React.Component{

    render(){
        return ( <div>Quote to go here</div> );
    }
}

ReactDOM.render(
    <QuoteBox />, document.getElementById('quote-app')
);