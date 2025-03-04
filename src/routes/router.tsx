import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../templates/Layout'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="github-actions/" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router