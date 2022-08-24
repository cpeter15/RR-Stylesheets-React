import React from 'react'
import { GrandchildOne } from './GrandchildOne'

const stylesheet = {
    border: "1px solid green",
    color: "blue"
};

export function ChildOne() {
    return (
        <div>
            <h2>ChildOne</h2>
            <GrandchildOne stylesheet={stylesheet} />
        </div>
    )
}

