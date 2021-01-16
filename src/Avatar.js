import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component {

        constructor() {
            super();
            this.state = {
                name:"welcome to my web"
            }
        }

        nameChange() {
            this.setState({
                name:"thank you for subscribing"
            })
        }

        likeChange() {
            this.setState({
                name:"thank you for like"
            })
        }

        render() {

            const Avatarlistarray = [
                {
                    id:1,
                    name:"shridhar",
                    work:"SDE"
                },
                {
                    id:2,
                    name:"raju",
                    work:"senior SDE"
                },
                {
                    id:3,
                    name:"remo",
                    work:"SDE-II"
                },
                {
                    id:4,
                    name:"rajan",
                    work:"DEMO"
                }
            ]
        
            const arrayavtar = Avatarlistarray.map( (avtarcard, i) => {
                return  <Avatarlist id={Avatarlistarray[i].id} name={Avatarlistarray[i].name} work={Avatarlistarray[i].work}/>
            })

            return <div>
            <h1> {this.state.name} </h1>
            {arrayavtar}
            <button onClick= { () => this.nameChange() }>subcribe</button>
            <button onClick= { () => this.likeChange() }>like</button>
            </div>
        }
    }


export default Avatar;