import React from 'react';


class C extends React.Component {
    constructor(props){
        super(props);
    }
    handerClick(e){
       const actions = this.props.actions;
       actions.login({
            user: '123',
            city: 'nanjing'
       })
    }
    render(){
        return(
            <button onClick={this.handerClick.bind(this)}>修改</button>
        )
    }
}

export default C;