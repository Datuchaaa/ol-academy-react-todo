import React from 'react'

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            showEditor: false,
            
            item: props.item,
        };
    }
    handleChange = (event) => {
        this.setState({iputValue: event.target.value});
    };
    handleUpdate = () =>{
        this.props.handleUpdate({
            id: this.props.currentTodo.id,
            title: this.state.iputValue
        })
        // console.log(this.state.iputValue)
    }
    handleRemovetask = (id) =>{
        console.log("remove task", id)
            
        
    }
   

    render() {
        return (
            <div>
                
                <label htmlFor="">Task: </label>
                <input type="text" name="" id=""
                value={this.state.item.title}
                 onChange={this.handleChange}/>
                <button onClick={this.handleUpdate}>Update</button>
                <button onClick={()=>this.handleRemovetask()}>❌</button>
                <button onClick={()=>this.handleEditTodoItem(Task)}>✎</button>
                        <input type="checkbox"
                          />
                          <button>⬇</button>
                          <button>⬆</button>
            </div>
        )
    }
}

export default Task
