

import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Foot from './Foot';




class App extends Component {
    render(){
    const { dispatch, visibleTodos, visibilityFilter} = this.props;
        return(
            <div>
                <AddTodo onAddClick={text => dispatch(addTodo(text))}/>

                <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index))}/>

                <Foot filter={visibilityFilter} onFilterChange={filter => dispatch(setVisibilityFilter(filter))}/>
            </div>

        )
    }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function todosFilter(todos, filter){
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;

        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter( todo => todo.completed);

        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter( todo => !todo.completed);
        default:
            return todos;
    }
}


function mapStateToProps(state){
    console.log(state);
    return{
        visibleTodos: todosFilter(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}



export default connect(mapStateToProps)(App);


