import React from "react";
import { ContactLustElement } from "components/ContactLustElement/ContactLustElement";
import s from "../ContactList/ContactList.module.css"

export function ContactList({array, deleteHundler}){
    return (
        <ul className={s.list}>
            <ContactLustElement array={array} deleteHundler={deleteHundler}/>
          </ul>
    )
};

