import React from "react";
import PropTypes from 'prop-types';
import s from "../ContactList/ContactList.module.css"

export function ContactLustElement({array, deleteHundler}) {
    return (
        array.map(({ id, name, number }) => {
              return <li key={id}><span className={s.name}>{name}:</span> {number} <button onClick={()=>deleteHundler(id)} className={s.button}>Delete</button></li>;
            })
    )
};
ContactLustElement.propTypes = {
  array: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
  })),
  deleteHundler:PropTypes.func.isRequired
}