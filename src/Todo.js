import React, {useState} from 'react'

function Todo() {

    const [num, setnum] = useState("");

    const [button, setbutton] = useState([]);




    const Eventlist = (event)=>{
        setnum(event.target.value);
    }

    const buttonlist= () =>{
        setbutton(((olditems)=>{
            return[...olditems, num]
        }))
        setnum("")
    }


    return (
        <div style={{textAlign:'center'}}>
        <h1>Todo LiSt</h1>
            
            <input type="text" placeholder="add your item" value={num}  onChange={Eventlist} />

            <button onClick={buttonlist}>+</button>
            <ol>
                {button.map((olditem)=>{
                    return <li> {olditem} </li>
                })}
            </ol>
        </div>
    )
}

export default Todo

