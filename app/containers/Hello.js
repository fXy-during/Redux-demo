import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as userinfoActions from '../actions/userinfo'


import A from '../components/A';
import B from '../components/B';
import C from '../components/C';


class HelloRedux extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <p>Hello World</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }
    componentDidMount(){
        this.props.userinfoActions.login({
            user: 'abc',
            city: 'beijing'
        })
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){ //触发数据变化
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloRedux)