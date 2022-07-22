import { useState } from 'react';
import { nanoid} from 'nanoid';


const Form = () =>{
    const [boxArr, setBoxArr] = useState([]);
    const [color, setColor] = useState ("");
    const [size,setSize] = useState (0);

    const submitHandler = (e) =>{
        e.preventDefault();
        if(color && size){

            const boxObj ={
                id:nanoid(),
                color,
                size
            }
            console.log('checking type of size state', typeof size)
            console.log('checking type of size in boxObj', typeof boxObj.size)
            setBoxArr([...boxArr,boxObj])
        }
            setColor(" ")
            setSize(0)
        
    }
    console.log(size)
    return (
        <div >
            <form className ="row "onSubmit={submitHandler}>
                <div className="col-auto">
                    <label className="display-6">Color:</label>
                    <input type="text" className=" col-auto" value={color} onChange ={(e) =>
                    setColor(e.target.value)
                    }/>
                </div>
                <div className="col-auto">
                    <label className="display-6">Box Size:</label>
                    <input type="number" className=" col-auto" value={size} onChange ={(e) =>
                    setSize(e.target.value)
                    }/>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary m-2">Add</button>
                </div>
                
            </form>
            <div className='m-2 ' style ={{display:"flex", flexWrap:"wrap"}}>
                {
                    boxArr.map( (box) =>{
                        return <div style = {{height:box.size + "px", width:box.size +"px",backgroundColor:box.color, margin:" 0px 10px"}}/>
                    })
                }
            </div>

        </div>
    )
}

export default Form;