import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { ListMethods } from '../redux/slice/list'
export default function Item({ data, index }) {
    const dispatch = useDispatch()
    return (
        <li onClick={() => {
            // dispatch({
            //     type: 'list/update',
            //     payload: index
            // })
            dispatch(ListMethods.update(index))
        }}>
            {data}
        </li>
    )
}
