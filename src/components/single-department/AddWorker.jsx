import React, { useState } from 'react'
import Modal from '../Modal'
import Input from '../UI/Input'
import Button from '../UI/Button'
import intance from '../../axios'

export default function AddWorker({ onClose, onFullfiled, department }) {
    const [inputValue, setInputValue] = useState({
        department,
        name: '',
        surname: '',
        avatar: ''
    })
    const handleChange = (e) => {
        const { value, name } = e.target
        setInputValue(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await intance.post('https://66755308a8d2b4d072ef8f02.mockapi.io/api/v1/workers', inputValue)
            onFullfiled(data)
        } catch (e) {
            onClose(e)
        }
        e.target.reset()
    }
    return (
        <Modal>
            <form className='p-5 bg-blue-100 rounded-lg flex flex-col gap-5' onSubmit={handleSubmit}>
                <Input name='name' value={inputValue.name} onChange={handleChange} />
                <Input name="surname" value={inputValue.surname} onChange={handleChange} />
                <Input name="avatar" value={inputValue.avatar} onChange={handleChange} />
                <Button className={'flex-1'} type="submut" variant={'primary'}>SEND</Button>
                <Button  className={'flex-1'} type="button" variant={'danger'}>CANCEL</Button>
            </form>
        </Modal>
    )
}
