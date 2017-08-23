import React from 'react';


class C extends React.Component {
    handerClick(){
        console.log(this.props);
       this.props.login({
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