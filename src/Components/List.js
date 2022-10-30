import React from 'react'
import Listitem from './Listitem';



function List(props) {
    return (
        <div className="continaer-fluid">
            <ul className="list-unstyled  row mx-5 my-3">
                {
                    props.items.map((item, i) => <Listitem item={item} key={i} id={i} deleted={props.sendData} />)
                }
            </ul>
        </div>
    );
}

export default List