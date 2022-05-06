import React from "react";
import PropTypes from 'prop-types';
import s from "../ContactList/ContactList.module.css"

export function ContactList({array, deleteHundler}){
    return (
        <ul className={s.list}>
            {array.map(({ id, name, number }) => {
              return <li key={id}><span className={s.text}>{name}:</span> {number} <button onClick={()=>deleteHundler(id)} className={s.button}>Delete</button></li>;
            })}
          </ul>
    )
};
ContactList.propTypes = {
  array: PropTypes.array,
  deleteHundler:PropTypes.func
}