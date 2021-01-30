import React, { Component } from 'react'



 class playerList extends Component {


    render() {

        const {top11, playerChange2} = this.props;

        return (
            <div className = "players-item">

               <p>{top11.player}</p>

               {/* Button */}
               <div className="actions" >

                    <button className="btn" onClick={() =>playerChange2(top11.id) } > 	&#8730; </button>
               
               </div>
                
            </div>
        )
    }
}

export default playerList;
