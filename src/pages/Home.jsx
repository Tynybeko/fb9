import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header'
import { Link, useOutletContext } from 'react-router-dom'
import intance from '../axios'
import Loading from '../components/Loading'

export default function Home() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const response = intance.get('https://66755308a8d2b4d072ef8f02.mockapi.io/api/v1/department')
        response
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [])
    return (
        <div className='w-full'>
            {
                loading && <Loading />
            }
            <div>

            </div>
            <div className='w-full'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>TITLE</td>
                            <td>СОЗДАНО</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data && data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>
                                        <Link to={`/${item.id}`} >
                                            {item.title}
                                        </Link>
                                    </td>
                                    <td>{new Date(item.createdAt).toLocaleString('RU-ru')}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
