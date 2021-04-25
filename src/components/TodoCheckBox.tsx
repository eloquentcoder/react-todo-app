import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { checkTodo } from '../store/todo-slice';

export default function TodoCheckBox(todo: any) {
    const dispatch = useDispatch();

    const toggleStatus = () => {       
        dispatch(checkTodo(todo.id));
    }

        return (
        <div>
           <FormGroup>
            <FormControlLabel
              control={<Switch checked={todo.completed} onChange={toggleStatus} />}
              label=""
            />
</FormGroup>
        </div>
    );

      

}