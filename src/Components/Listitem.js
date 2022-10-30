import React from 'react'

function Listitem(props) {

    return <>
        <li className=" shadow p-2 my-2 col-sm-9">{props.item}</li>
        <button className="btn btn-danger mx-4  my-2 col-sm-2 px-2 " onClick={() => { props.deleted(props.id) }}>Delete</button>
    </>

}

export default Listitem