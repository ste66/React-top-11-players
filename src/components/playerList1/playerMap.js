import React, { Component } from 'react'


import PlayerList from "./playerList"


class playerMap extends Component {
  
  // !Create State with "Constructor" method*********
    constructor(props){ 
        super(props); // inheritance relationship  

        this.state = {
            value:""
        }
 // ! 1st Way: To define Bind (Inside the Constructor)
       /* this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);  */

    }
// ! ==Change:=================================

handleNewTodoChange (event){

    this.setState ({
        value : event.target.value
    });

}

  // ! SUBMIT :=================================
  handleSubmit(event){
    event.preventDefault(); 

    this.props.handleAddTodo(this.state.value);

  this.setState({
        value : ""
    }); 
}
  
  render() {

        const {list2,handleChange2} = this.props;

        return (
            <div className="team-container ml-5">
  
                {/* ========================MAP=========================== */}
                <h1 className ="mt-5" >  Best Eleven</h1>
                {
                    list2.map ( bestPlayer1 => {

                        return(

                            <PlayerList
                            top11 = {bestPlayer1}
                           
                           playerChange2={handleChange2}

                            key={bestPlayer1.id}
                            />

                        )

                    })

                }       
                 </div>


        )
    }
}

export default playerMap;
