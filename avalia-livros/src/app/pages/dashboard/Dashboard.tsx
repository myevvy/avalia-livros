import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div>
            <h1>Avalia Livros</h1>
            <p>Dashboard</p>
            <Link to="/entrar">Login</Link>
        </div>
    )
}

