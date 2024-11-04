import React, { useContext } from 'react'
import Item from './Item'
import { useSelector } from 'react-redux';



export default function List() {
    console.log('RENDER');
    const data = useSelector(state => state.list)
    console.log(data);
    return (
        <div>
            <h1>
                List
            </h1>
            <ul>
                {
                    data.map((item, index) => (
                        <Item index={index} key={item} data={item} />
                    ))
                }
            </ul>
        </div>
    )
}
