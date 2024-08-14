import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/Button'
import API from '../../../axios'

export default function LoginPage() {
    const [inputValue, setInputValue] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValue(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await API.post('auth/login', inputValue, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            localStorage.setItem('token', data.token)
            navigate('/')
        } catch (e) {
            setError(e?.response?.data?.error ?? e?.message ?? 'Ошибка сети')
        }
        setLoading(false)
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        id="email"
                        name="login"
                        onChange={handleChange}
                        value={inputValue.login}
                        type="text"
                        required
                        autoComplete="login"
                    />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={inputValue.password}
                        required
                        autoComplete="current-password"
                    />
                    <p className='text-red-500'> {error}</p>
                    <div>
                        <Button
                            type="submit"
                            disabled={loading}
                            className="text-xl bg-indigo-500 hover:bg-indigo-800 font-medium"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
