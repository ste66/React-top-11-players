import React, { Component } from 'react'

import Navbar from "./components/playerList1/nav"
import WorldMap from "./components/worldBest/worldMap"

import PlayerMap from "./components/playerList1/playerMap"

import "./css/App.scss" 

class App extends Component {

    // Normal State Method==================
    // state = {
    //     topPlayers : [
    //         {id:1, player:"Lionel Messi", done:false}, 
    //         {id:2, player:"Mohamed Salah", done:false},
    //         {id:3, player:"Zinedine Zidane", done:false},
    //         {id:4, player:"Christiano Ronaldo", done:false},
    //         {id:5, player:"Neymar", done:true},
    //         {id:6, player:"Xavi", done:true},
    //         {id:7, player:"Andres Iniesta", done:true},
    //         {id:8, player:"Sergio Ramos", done:true},
    //         {id:9, player:"Manuel Neuer", done:false}, 
    //         {id:10, player:"Karim Benzima", done:false},
    //         {id:11, player:"Toni Kroos", done:false},
    //         {id:12, player:"Kylian Mbappe", done:false},
    //         {id:13, player:"Zlatan Ibrahimovic", done:true},
    //         {id:14, player:"Sadio Mane", done:true},
    //         {id:15, player:"Luka Modric", done:true},
    //         {id:16, player:"Sergio Arguero", done:true},
    //         {id:17, player:"Romelu Lukaku", done:true},
    //         {id:18, player:"Raheem Sterling", done:true},
    //         {id:19, player:"Paul Pogba", done:true},
    //         {id:20, player:"Luiz Suarez", done:true}
    //     ]

    // }

    // State Constructor Method

    constructor (props) {
        super(props);
      this.state = {
         topPlayers : [
                {id:1, player:"Lionel Messi", done:false}, 
                {id:2, player:"Mohamed Salah", done:false},
                {id:3, player:"Zinedine Zidane", done:false},
                {id:4, player:"Christiano Ronaldo", done:false},
                {id:5, player:"Neymar", done:true},
                {id:6, player:"Xavi", done:true},
                {id:7, player:"Andres Iniesta", done:true},
                {id:8, player:"Sergio Ramos", done:true},
                {id:9, player:"Manuel Neuer", done:false}, 
                {id:10, player:"Karim Benzima", done:false},
                {id:11, player:"Toni Kroos", done:false},
                {id:12, player:"Kylian Mbappe", done:false},
                {id:13, player:"Zlatan Ibrahimovic", done:false},
                {id:14, player:"Sadio Mane", done:true},
                {id:15, player:"Luka Modric", done:true},
                {id:16, player:"Sergio Arguero", done:true},
                {id:17, player:"Romelu Lukaku", done:true},
                {id:18, player:"Raheem Sterling", done:true},
                {id:19, player:"Paul Pogba", done:true},
                {id:20, player:"Luiz Suarez", done:true}
            ]

        }       
    }
      /* ==========================Add Item=================================== */

     // Step 1: Define Add Function

     addPlayer = value => {

        // Step 1.1 : Define New Object!
        
        const newPlayer = {
            id : this.state.topPlayers.length+1,
            player: value ,
            done: true

        }

        console.log(newPlayer);
        console.log(this.state.topPlayers.length);

        // Step 1.2 : Use NewPlayer Object with the previous one to create new Array
        this.setState({
        topPlayers:[...this.state.topPlayers ,newPlayer] // => [{id: this.state.topPlayers.length ,task: value ,done: false}]
        });
        console.log(this.state.topPlayers);
      

    };
    
 /* =========================Update Player==================================== */
    updateTopPlayers = playerId => {
        
        let newPlayerList = this.state.topPlayers.map( arrOfPlayer=> {

        if(arrOfPlayer.id === playerId ){
            arrOfPlayer.done = ! arrOfPlayer.done 
            return arrOfPlayer;
        } else return arrOfPlayer;        
        });

        this.setState({
            topPlayers:newPlayerList
        })

    };

    render() {

       const worldPlayer = this.state.topPlayers.filter(newBest1=> newBest1.done);
       const playerList = this.state.topPlayers.filter(playerBest1 => ! playerBest1.done);

        return (
            <div>
                <Navbar/>
                <div className="app">

                <WorldMap  list1={worldPlayer} handleChange={this.updateTopPlayers.bind(this)} handleAddTodo={this.addPlayer.bind(this)} />

                <PlayerMap  list2={playerList} handleChange2={this.updateTopPlayers.bind(this)}/>
                 </div>
            </div>

        )
    }
}

export default App;
