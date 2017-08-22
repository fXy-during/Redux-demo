import React from 'react';


class A extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <p>{this.props.userinfo.user}</p>
        )
    }
}

export default A;