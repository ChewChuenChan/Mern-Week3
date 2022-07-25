
const List = (props) => {

    const {todoArr, setToDoArr} = props;

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
        <div className='card text-center m-3'>
        {
            todoArr.map((todos,id) =>{
            return (
                <div className ={styled(todos.completed)} key ={todos.id}>
                    <span className="m-2">{todos.text}</span>
                    <input type="checkbox" classame="btn-check" autoComplete="off" onChange={(e) => completedHandler(todos)}/>
                    <button onClick={(e) => deleteHandler(todos.id)} className="btn btn-danger m-3">Delete</button>
                </div>
                );
            })
        }
        </div>
    );

};

export default List;