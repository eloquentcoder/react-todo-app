import React from 'react';
import TodoCheckBox from './TodoCheckBox';

interface Props  {
    todos: {
        title: string,
        completed: boolean,
        id: number
    }; 
}

export default class TodoBlock extends React.Component<Props> {

    render() {
        return (
        <div>
            <div className="flex justify-between m-2 px-2 bg-white border-2 border-gray-200 rounded items-center">
                <h1 className="text-xs">{this.props.todos.title}</h1>
                <TodoCheckBox todo={this.props.todos} />
            </div>
        </div>);
    };

}