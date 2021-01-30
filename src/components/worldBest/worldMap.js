import React, { Component } from 'react'

import WorldPlayer from "./worldPlayer"

class worldMap extends Component {

    // ! State: =================================
    // At the beginning input is empty. So we defined empty value!

    // state ={
    //     value : ""
    // }
// ! 2nd Way : To create State"Constructor"

constructor(props){ 
    super(props); // inheritance relationship  

    this.state = {
        value:""
    }

    // ! 1st Way: To define Bind (Inside the Constructor)
   /* this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);  */

}
// ! 
    // ! CHANGE:=================================

    // onChange : to get the data inside the input immediately

     // ! 1st Way to define Function ( ARROW )
 /*   handleNewTodoChange = (event) => {

    this.setState ({
            value : event.target.value
        });
        
    } */
 // ! 2nd Way to define Function ( CLASSIC )
    handleNewTodoChange (event) {

    this.setState ({
            value : event.target.value
        });
        
    }

    // ! SUBMIT :=================================
 // ! 1st Way to define Function ( ARROW ) for submit
    // handleSubmit = (event) => {
        // To not refresh the page so you will keep the data inside the input
    //     event.preventDefault(); 

    //     this.props.handleAddTodo(this.state.value);

    //   this.setState({
    //         value : ""
    //     }); 
    // }

 // ! 2nd Way to define Function ( CLASSIC ) in submit button*

 handleSubmit(event){
    event.preventDefault(); 

    this.props.handleAddTodo(this.state.value);

  this.setState({
        value : ""
    }); 
}


    render() {

        const {list1,handleChange} = this.props;

        return (
            <div className="world-container">
{/* ========================================FORM=========================================== */}

{/* Step 3: Create a Form to add newPlayer */}

<form className="world-form" onSubmit={this.handleSubmit.bind(this)} >

<label className="input-item">

    <input value={this.state.value} onChange={this.handleNewTodoChange.bind(this)}/>

</label>

{/* Submit Part = ADD */}

    <input className="btn" type="submit" value="ADD"/>

</form>

                        <div className="worlds ml-5">
                <h1> World Best </h1>
                {
                    list1.map ( newBest1 => {

                        return(

                            <WorldPlayer
                             worldBest = {newBest1}
                           
                        playerChange1={handleChange}

                           key={newBest1.id}
                        

                            />

                        )

                    })

                }
                </div>
            </div>
        )
    }
}

export default worldMap;
