import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {login,undateCityName } from '../actions/userinfo'


import A from '../components/A';
import B from '../components/B';
import C from '../components/C';


class HelloRedux extends React.Component {
    render() {
    const { dispatch, userinfo } = this.props;
        console.log(userinfo);
        return (
            <div>
                <p>Hello World</p>
                <hr/>
                <div>test</div>
                <A userinfo={userinfo} />
                <hr/>
                <B userinfo={userinfo}/>
                <hr/>
                <C login={data=>dispatch(login(data))}/>
            </div>
        )
    }
    componentDidMount(){
        const { dispatch, userinfo } = this.props;
        dispatch(login({
            user: 'abc',
            city: 'beijing'
            })
        )
    }
}

function mapStateToProps(state){  //reducers 
    console.log('state:',state);
    return {
        userinfo: state.userinfo
    }
}

// function mapDispatchToProps(dispatch){ //触发数据变化
//     return {
//         userinfoActions: bindActionCreators(userinfoActions, dispatch)
//     }
// }

export default connect(mapStateToProps)(HelloRedux);