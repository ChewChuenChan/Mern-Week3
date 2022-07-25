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

    return(

        <div>
            <form className ="m-3 col-6 d-flex" onSubmit={submitHandler}>
            <input type="text" className='form-control ' value={toDo} onChange={(e) =>{
                setToDo(e.target.value);
            }}/>
            <button className="btn btn-primary m-3">Add</button>
            </form>
        </div>

    );
}

export default Form;