import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';

const Avatarlist = (propse) => {
    return <div className="avtar-wrapper ma4 bg-light-purple dib grow tc">
        <img src={`https://joeschmoe.io/api/v1/${propse.name}`}  />
        <h1>{propse.name}</h1>
        <p>{propse.work}</p>
    </div>
}

export default Avatarlist;