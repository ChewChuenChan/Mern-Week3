import { useState } from 'react';
import { nanoid} from 'nanoid';

const Form = (props) => {
    const [toDo,setToDo] = useState("");
    const {todoArr, setToDoArr} = props;

    const submitHandler = (e) =>{
        e.preventDefault();

        if(toDo.length === 0){
            return;
        }

        const todoitem ={
            id: nanoid(),
            text: toDo,
            complete: false
        }

        console.log(toDo);
        setToDoArr([...todoArr,todoitem]);
        setToDo ("")
    };

    const completedHandler = (todos) =>{
        todos.completed = !todos.completed;
        setToDoArr([...todoArr]);
    };

    const deleteHandler = (delindex) =>{
        const filteredTodos = todoArr.filter ((todos,index) =>{
            return todos.id !== delindex;
        });
        setToDoArr(filteredTodos);
    };

    const styled = (completed) => {
        if (completed === true){
            return "completed";
        }
        else{
            return "notcompleted";
        }
        };

    return(
        <div>
            <div>
                <form className ="m-3 col-6 d-flex" onSubmit={submitHandler}>
                <input type="text" className='form-control ' value={toDo} onChange={(e) =>{
                    setToDo(e.target.value);
                }}/>
                <button className="btn btn-primary m-3">Add</button>
                </form>
            </div>

            <div className='card text-center m-3'>
            {
                todoArr.map((todos,id) =>{
                return (
                    <div className ={styled(todos.completed)} key ={todos.id}>
                        <span>{todos.text}</span>
                        <input type="checkbox" classame="btn-check" autoComplete="off" onChange={completedHandler(todos)}/>
                        <button onClick={deleteHandler(todos.id)} className="btn btn-danger m-3">Delete</button>
                    </div>
                    );
                })
            }
            </div>
        </div>

    );
}

export default Form;