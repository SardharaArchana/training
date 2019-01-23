import React, {Component} from 'react';

class AddUser extends Component{

    render(){
        return(
            <div>
                <h4 style={{margin:'10px'}}>Add User</h4><br/>
                <div style={{margin:'10px'}}>
                <label >Name:</label>
                </div>
                <input style={{height:'25px', width:'400px', marginInlineStart:'10px'}} placeholder='enter first name'></input>
                <div style={{margin:'10px'}}>
                <label>Job:</label>
                </div>
                <input  style={{height:'25px', width:'400px', marginInlineStart:'10px'}} placeholder='enter job'></input>
                <div style={{margin:'10px'}}>
                    <button style={{margin:'10px', width:'60px', height:'30px'}}>Submit</button>
                    <button style={{margin:'10px', width:'60px', height:'30px'}}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default AddUser;