import React from 'react';


class A extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('A props :',this.props.userinfo);
        console.log("2");
    }
    render(){
        return(
            <p>{this.props.userinfo.user}</p>
        )
    }
}

export default A;