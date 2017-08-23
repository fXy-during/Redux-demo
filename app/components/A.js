import React from 'react';


class A extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('A props :',this.props.userinfo);
    }
    render(){
        return(
            <p>{this.props.userinfo.user}</p>
        )
    }
}

export default A;