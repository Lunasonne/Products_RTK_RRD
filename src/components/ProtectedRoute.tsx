import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectUser } from '../auth/selectors'
import type { JSX } from 'react'

interface Props {
    outlet: JSX.Element
}

export default function ProtectedRoute({ outlet }: Props): JSX.Element {
    const user = useAppSelector(selectUser)  
    if (user) {
        return outlet
    }
    return <Navigate to="/login" /> // компонент, который делает редирект
}