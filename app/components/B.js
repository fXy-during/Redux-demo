import React from 'react';

class B extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <p>{this.props.userinfo.city}</p>
        )
    }
}

export default B;