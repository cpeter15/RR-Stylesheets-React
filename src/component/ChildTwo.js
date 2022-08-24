import React from 'react'
import { GrandchildTwo } from './GrandchildTwo'

const stylesheet = {
    border: "1px solid blue",
    color: "green"
};

export function ChildTwo() {
    return (
        <div>
            <h2>ChildTwo</h2>
            <GrandchildTwo stylesheet={stylesheet} />
        </div>
    )
}
