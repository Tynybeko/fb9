import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import intance from '../axios'
import Loading from '../components/Loading'
import Button from '../components/UI/Button'
import AddWorker from '../components/single-department/AddWorker'

export default function SingleDepartment() {
    const { id } = useParams()
    const [department, setDepartment] = useState(null)
    const [createModal, setCreateModal] = useState(false)
    const [workers, setWorkers] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!id) return
        setLoading(true)
        const response = intance.get('https://66755308a8d2b4d072ef8f02.mockapi.io/api/v1/department/' + id)
        response.then(({ data }) => {
            setDepartment(data)
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        const workersRes = intance.get('https://66755308a8d2b4d072ef8f02.mockapi.io/api/v1/workers/', {
            params: {
                department: id
            }
        })
        const allResponse = Promise.all([workersRes])
        allResponse
            .then(([work]) => {
                setWorkers(work.data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))


    }, [id])

    const handleClose = (error) => {
        if (error) {
            console.log(error);
        }
        setCreateModal(false)
    }

    const handleCreateWorker = (result) => {
        setWorkers(prev => {
            if (prev) {
                return [...prev, result]
            }
            return [result]
        })
        setCreateModal(false)
    }
    return (
        <div className='w-full'>
            {
                loading && <Loading />
            }
            {
                createModal && <AddWorker department={id} onFullfiled={handleCreateWorker} onClose={handleClose} />
            }
            <div className='w-full'>
                {
                    department &&
                    <div className='w-full flex justify-between p-5 border-b-2 border-red-500'>
                        <h1 className='text-xl text-medium flex gap-4'>
                            {department.title}
                            <p className='bg-green-100 px-5 rounded-lg '>
                                ID: <span className='text-indigo-500'>
                                    {department.id}
                                </span>
                            </p>
                        </h1>
                        <nav className='flex gap-4'>
                            <Button variant={'primary'} >UPDATE</Button>
                            <Button variant={'danger'} >DELETE</Button>
                            <Button onClick={() => setCreateModal(prev => !prev)} variant={'outline'} >ADD WORKER</Button>
                        </nav>
                    </div>
                }

            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>SURNAME</td>
                        <td>AVATAR</td>
                        <td>CREATE</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        (workers && workers.length == 0) &&
                        <tr>
                            <td className='text-center bg-red-100' colSpan={4}>ПУСТО</td>
                        </tr>
                    }
                    {
                        workers && workers.length > 0 && workers.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>
                                    <Link to={'/user/' + item.id}>
                                        {item.name}
                                    </Link>
                                </td>
                                <td>{item.surname}</td>
                                <td>
                                    <img width={80} height={80} src={item.avatar} alt="" />
                                </td>
                                <td>{new Date(item.createdAt).toLocaleString('RU-ru')}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
