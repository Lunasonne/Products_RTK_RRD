import { type FormEvent, type JSX, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectError } from './selectors'
import { login } from './authSlice'

export default function Login(): JSX.Element {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const error = useAppSelector(selectError)
    const dispatch = useAppDispatch()
    function handleLogin(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        console.log(dispatch(login({ username, password })))
    }
    return (
        <>
            <p className="text-4xl font-bold text-orange-800">Enter your name and password </p>
              <p className="text-2xl font-bold text-orange-800">(Hint: emilys, emilyspass)</p>
            <p>{error}</p>
                       <form onSubmit={handleLogin} className="text-3xl font-bold text-orange-800">
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
}