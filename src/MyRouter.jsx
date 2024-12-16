import { Routes, Route } from 'react-router-dom'
import App from './App'
import NavBar from './components/NavBar'
import Pokemon from './page/Pokemon'


const MyRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contact' element={<h1>Contact page</h1>} />
                <Route path='/pokemon/:pokemonID' element={<Pokemon />}  />
                <Route path='*' element={<h1>Error page not found</h1>} />
            </Routes>
        </>
    )
}


export default MyRouter