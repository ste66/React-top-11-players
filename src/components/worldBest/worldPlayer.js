import React, { Component } from 'react'

 class worldPlayer extends Component {


    render() {

        const {worldBest} = this.props;

        return (
            <div className= "world-item ml-5">
 
               <p >{worldBest.player}</p>

               {/* Button */}
            
               <div className="actions">
               <button className="btn" onClick={ () => this.props.playerChange1(worldBest.id) } > &#8730;</button>
            
                    
               </div>
                
            </div>
        )
    }
}

export default worldPlayer;

