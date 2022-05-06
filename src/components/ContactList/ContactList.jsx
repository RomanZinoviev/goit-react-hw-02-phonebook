import React from "react";

export function ContactList({array, deleteHundler}){
    return (
        <ul>
            {array.map(({ id, name, number }) => {
              return <li key={id}>{name}: {number} <button onClick={()=>deleteHundler(id)}>Delete</button></li>;
            })}
          </ul>
    )
}